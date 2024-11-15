package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"
)

// Define a global template map
var templates = map[string]*template.Template{}

// Initialize templates
func init() {
	log.Printf("Initializing")

	// Load and parse base template
	baseTemplate, err := template.ParseFiles("./templates/base.html")
	if err != nil {
		log.Fatalf("Failed to parse base template: %v", err)
	}
	templates["base"] = baseTemplate

	// Parse page-specific templates
	pageTemplates := []string{
		"./templates/index.html",
		"./templates/about.html",
		"./templates/contact.html",
		"./templates/404.html",
	}

	for _, file := range pageTemplates {
		tmpl, err := template.Must(baseTemplate.Clone()).ParseFiles(file)
		if err != nil {
			log.Fatalf("Failed to parse page template %s: %v", file, err)
		}
		templates[file] = tmpl
	}
	log.Printf("templates:", templates)
}

// Render the specified page template within the base layout
func renderTemplate(w http.ResponseWriter, templateName string, title string) {
	tmpl, ok := templates[templateName]
	if !ok {
		http.Error(w, "Template not found", http.StatusNotFound)
		return
	}

	err := tmpl.ExecuteTemplate(w, "base.html", map[string]interface{}{
		"Title":   title,
		"Content": templateName,
	})
	if err != nil {
		log.Printf("Failed to execute template: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func pageHandler(w http.ResponseWriter, r *http.Request) {
	var templateLocation, pageTitle string

	switch r.URL.Path {
	case "/":
		templateLocation = "./templates/index.html"
		pageTitle = "Joes Experiences Maps"
	case "/about":
		templateLocation = "./templates/about.html"
		pageTitle = "About Us - Joes Experiences Maps"
	case "/contact":
		templateLocation = "./templates/contact.html"
		pageTitle = "Contact Us - Joes Experiences Maps"
	default:
		templateLocation = "./templates/404.html"
		pageTitle = "Page not found"
	}

	renderTemplate(w, templateLocation, pageTitle)
}

func main() {
	port := 8080
	if envPort := os.Getenv("PORT"); envPort != "" {
		if p, err := strconv.Atoi(envPort); err == nil {
			port = p
		}
	}

	// Serve static files (e.g., images, CSS, JavaScript)
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", pageHandler)

	log.Printf("Starting server on :%d...\n", port)
	log.Fatal(http.ListenAndServe(":"+strconv.Itoa(port), nil))
}
