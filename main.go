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
		"./templates/map.html",
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

func RenderTemplate(w http.ResponseWriter, r *http.Request, templateName string, data map[string]interface{}) {
	tmpl, ok := templates[templateName]
	if !ok {
		log.Println("Template not found")
		http.Redirect(w, r, "/error?message=Template+not+found", http.StatusSeeOther)
		return
	}

	err := tmpl.ExecuteTemplate(w, "base.html", data)
	if err != nil {
		log.Println("Failed to execute template")
		http.Redirect(w, r, "/error?message=Failed+to+execute+template", http.StatusSeeOther)
		return
	}
}

func pageHandler(w http.ResponseWriter, r *http.Request) {
	var templateLocation string
	data := map[string]interface{}{
		"Email": "",
		// Add other default data here if needed
	}

	switch r.URL.Path {
	case "/":
		templateLocation = "./templates/index.html"
		data["Title"] = "Joes Experiences Maps"
	case "/maps/gdp_per_region":
		templateLocation = "./templates/map.html"
		data["Title"] = "Joes Experiences Maps"
		data["Heading"] = "GDP Per Region in The Philippines"
		data["Description"] = "GDP of the Philippines in 2023 is 24,318,611,399,000. That is ₱24.3 T and equals to $437.1 B."
		data["Folder"] = "gdp_per_region"
	case "/maps/gdp_per_capita_manila":
		templateLocation = "./templates/map.html"
		data["Title"] = "Joes Experiences Maps"
		data["Heading"] = "GDP Per Capita in Manila - Philippines"
		data["Description"] = "GDP Per Capita in Manila Per Districts in 2023, Philippines."
		data["Folder"] = "gdp_per_capita_manila"
	case "/about":
		templateLocation = "./templates/about.html"
		data["Title"] = "About Us - Joes Experiences Maps"
	case "/contact":
		templateLocation = "./templates/contact.html"
		data["Title"] = "Contact Us - Joes Experiences Maps"
	default:
		templateLocation = "./templates/404.html"
		data["Title"] = "Page not found"
	}

	RenderTemplate(w, r, templateLocation, data)
}

func main() {
	port := 8080
	if envPort := os.Getenv("PORT"); envPort != "" {
		if p, err := strconv.Atoi(envPort); err == nil {
			port = p
		}
	}

	// Serve static files (e.g., images, CSS, JavaScript)
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", pageHandler)

	log.Printf("Starting server on :%d...\n", port)
	log.Fatal(http.ListenAndServe(":"+strconv.Itoa(port), nil))
}
