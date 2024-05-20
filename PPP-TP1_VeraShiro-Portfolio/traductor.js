function translateText(text) {
    const translationMap = {
        //NavBar
        "About": "Acerca de",
        "Projects": "Proyectos",
        "Gallery": "Galería",
        "Socials": "Redes Sociales",
        "Contact Form": "Formulario de Contacto",
        "Toggle Theme": "Cambiar tema",
        "Translate": "Traducir",

        //About
        "Slithering Through Art and Code": "Deslizándome a través del Arte y el Código",
        "Miyuki Shiro's Portfolio": "Portafolio de Miyuki Shiro",
        "Hello everyone! I'm ": "¡Hola a todos! Soy ",
        "Miyuki Shiro": "Miyuki Shiro",
        ", also known as ": ", también conocido como ",
        "Snake, Snowst0rm, or Techn0verload": "Snake, Snowst0rm, o Techn0verload",
        ". I'm a self-taught artist delving into the realms of digital art and animation. Proficient in HTML, CSS, and JavaScript, with ongoing learning in PHP, I'm on a quest to master Python, C Sharp, and C++, among other languages. Holding a Cisco certification in Cybersecurity.": ". Soy un artista autodidacta que se adentra en los reinos del arte digital y la animación. Proficiente en HTML, CSS y JavaScript, con aprendizaje continuo en PHP, estoy en una búsqueda para, dominar Python, C Sharp y C++, entre otros lenguajes. Poseo una certificación de Cisco en Ciberseguridad.",
        "At 17 years old, I reside in Argentina and am fluent in both English and Spanish. Previously pursuing a Professional Education Tecnician degree, I've redirected my studies towards earning a Computer Tecnician degree, driven by my passion for technology and creativity.": "A los 17 años, resido en Argentina y hablo fluidamente tanto inglés como español. Anteriormente, estaba persiguiendo un título de Educación Técnico Profesional, pero redirigí mis estudios hacia la obtención de un título de Técnico en Computación, impulsado por mi pasión por la tecnología y la creatividad.",
        "In the realm of art, I specialize in character designs, illustrations, and commissions, boasting an adaptable style capable of embracing diverse designs and aesthetics. While my animation skills are still developing, I remain committed to continual growth and pushing the boundaries of my creative expression.": "En el ámbito del arte, me especializo en el diseño de personajes, ilustraciones y encargos personalizados, presumiendo de un estilo cambiante capaz de adaptarse a diversos diseños y estéticas. Aunque mis habilidades en animación aún están en desarrollo, permanezco comprometido con un crecimiento continuo y empujando los límites de mi expresión creativa.",

        //Projects
        "Highlighted Projects": "Proyectos Destacados",
        "Here are some of my best projects so far, each accompanied by a brief description below its reference picture. To explore further, simply click on the ": "Aquí están algunos de mis mejores proyectos hasta ahora, cada uno acompañado por una breve descripción debajo de su imagen de referencia. Para explorar más, simplemente haz clic en el botón ",
        "Check it Out!": "¡Pruebalo!",
        " button, and you'll be automatically directed to the project's page.": " y serás dirigido automáticamente a la página del proyecto.",
        "In Development.": "En Desarrollo.",
        "This project's display is still in progress, apologies.": "La presentación de este proyecto aún está en progreso, disculpas.",
        "Check it out!": "¡Pruebalo!",

        //Gallery
        "Art Gallery": "Galería de Arte",
        "This is my personal art gallery featuring a selection of my digital art pieces. Each piece is accompanied by its title (if applicable) and a brief description (when available). For more of my work, feel free to explore my social media links located further down the page.": "Esta es mi galería de arte personal que presenta una selección de mis piezas de arte digital. Cada obra está acompañada por su título (si corresponde) y una breve descripción (cuando esté disponible). Para ver más de mi trabajo, no dudes en darle un vistazo a mis redes sociales ubicadas más abajo en la página.",
        "Untitled": "Sin título",
        "Full Render, Chibi art, Commission example.": "Render completo, Arte Chibi, Ejemplo de comisión.",
        "Full Render, Full body art, Commission example.": "Render completo, Arte de cuerpo completo, Ejemplo de comisión.",
        "Base color, Bust up, Filter test.": "Color base, Busto, Prueba de filtro.",

        //Socials
        "Contact Information": "Información de Contacto",
        "Feel free to connect with me through the following social media platforms. Simply click on the respective button to visit my profile and send me a direct message.": "No dudes en conectarte conmigo a través de las siguientes plataformas de redes sociales. Simplemente haz clic en el botón respectivo para visitar mi perfil y enviarme un mensaje directo.",

        //Contact Form
        "Alternatively, you can reach me via email using the form below. Please ensure to fill out all required fields, and I'll get back to you as soon as possible.": "Alternativamente, puedes contactarme por correo electrónico utilizando el formulario a continuación. Por favor, asegúrate de completar todos los campos requeridos, y me pondré en contacto contigo lo antes posible.",
        "Contact through email": "Contacto por correo electrónico",
        "Name:": "Nombre:",
        "Email:": "Email:",
        "Subject:": "Asunto:",
        "Message:": "Mensaje:",
    };

    const reverseTranslationMap = {};
    for (const key in translationMap) {
        reverseTranslationMap[translationMap[key]] = key;
    }

    return translationMap[text] || reverseTranslationMap[text] || text;
}

function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const translatedText = translateText(node.textContent);
        node.textContent = translatedText;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const childNode of node.childNodes) {
            translateNode(childNode);
        }
    }
}

let isEnglish = true;
function toggleTranslation() {
    const rootNode = document.body;
    translateNode(rootNode);
    isEnglish = !isEnglish;
    document.documentElement.lang = isEnglish ? 'en' : 'es';
    console.log('Language has been switched sucessfully.');  // Debugging
}