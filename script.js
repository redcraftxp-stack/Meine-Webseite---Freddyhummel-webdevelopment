
/* ===== Einstellungen ===== */
var CFG = {
  web3formsKey: '31495acc-b3e3-4b9d-b169-2f034629c560',
  formEndpoint: 'https://formsubmit.co/ajax/freddyhummel.de@gmail.com',
  botEndpoint: '/api/chat'
};

/* ===== Sprache erkennen ===== */
var LANG = (function () {
  var path = window.location.pathname;
  var match = path.match(/^\/(de|en|es|fr)(\/|$)/);
  return match ? match[1] : 'de';
})();

var BASE = '/' + LANG + '/';

var TXT = {
  de: {
    sending: 'Wird gesendet …',
    contactSuccess: 'Vielen Dank! Ihre Nachricht wurde gesendet.',
    contactError: 'Nachricht konnte nicht gesendet werden.',
    sendError: 'Fehler beim Senden',
    reviewSending: 'Wird gesendet …',
    reviewSubmit: 'Bewertung absenden',
    reviewSuccess: 'Vielen Dank! Deine Bewertung wurde gesendet und wird nach Prüfung veröffentlicht.',
    reviewError: 'Die Bewertung konnte nicht gesendet werden.',
    noReviews: 'Noch keine veröffentlichten Rezensionen.',
    loadReviewsError: 'Rezensionen konnten gerade nicht geladen werden.',
    customer: 'Kunde',
    assistant: 'Website-Assistent',
    automatic: 'Automatische Antworten, kein Mensch',
    ai: 'KI-Assistent – Antworten können Fehler enthalten',
    close: 'Assistent schließen',
    open: 'Assistent öffnen',
    question: 'Ihre Frage …',
    send: 'Senden',
    chipsShow: 'Häufige Fragen anzeigen ▼',
    chipsHide: 'Häufige Fragen ausblenden ▲',
    greeting: 'Hallo! Ich beantworte Fragen zu dieser Website. Ich bin ein automatischer Assistent, keine Person.',
    start: 'Gern! Vier kurze Fragen, dann haben Sie eine Zusammenfassung für ein Angebot. Mit „abbrechen“ beenden Sie das jederzeit.',
    cancel: 'Alles klar, abgebrochen.',
    summary: 'Danke! Das ist die Grundlage für ein Angebot.',
    emailSummary: 'Zusammenfassung per E-Mail senden',
    contactForm: 'Kontaktformular nutzen',
    fallback: 'Dazu habe ich keine passende Antwort. Fragen Sie Freddy direkt:',
    flow: [
      ['Aus welcher Branche kommt Ihr Unternehmen?', 'Branche'],
      ['Welches Ziel soll die Website haben (z. B. Anfragen, Termine, Information)?', 'Ziel'],
      ['Welche Inhalte gibt es schon (Texte, Logo, Bilder)?', 'Inhalte'],
      ['Welche Funktionen brauchen Sie (z. B. Kontaktformular, Galerie, Online-Buchung)?', 'Funktionen']
    ],
    chips: [
      ['💶 Was kostet eine Website?', 'Was kostet eine Website?'],
      ['📋 Wie läuft die Zusammenarbeit ab?', 'Wie läuft die Zusammenarbeit ab?'],
      ['⏱ Wie lange dauert es?', 'Wie lange dauert die Erstellung?'],
      ['🛠 Welche Leistungen gibt es?', 'Welche Leistungen bietest du an?'],
      ['✏️ Kann ich die Website selbst bearbeiten?', 'Kann ich meine Website selbst bearbeiten?'],
      ['📞 Wie kann ich Kontakt aufnehmen?', 'Wie kann ich Kontakt aufnehmen?']
    ],
    kb: [
      [['hallo', 'guten tag', 'moin', 'servus', 'hey'], 'Hallo! Schön, dass Sie hier sind. Ich beantworte gerne Ihre Fragen rund um die Website-Erstellung. Was möchten Sie wissen?'],
      [['kost', 'preis', 'teuer', 'budget', 'günstig', 'kostenpunkt'], 'Die Kosten einer Website hängen vom Umfang, der Anzahl der Seiten und den gewünschten Funktionen ab. Der Preis wird immer vor Beginn der Erstellung gemeinsam besprochen und verbindlich vereinbart. Sie wissen also vorher, welche Kosten auf Sie zukommen. <a href="' + BASE + '#kontakt">Jetzt unverbindlich anfragen</a>.'],
      [['bezahlen', 'zahlung', 'anzahlung', 'rechnung'], 'Die Zahlungsbedingungen werden vor Beginn des Projekts gemeinsam vereinbart. Alle Kosten werden transparent besprochen, bevor die Umsetzung startet.'],
      [['dauer', 'lange', 'wann fertig', 'zeit', 'wochen', 'tage'], 'Je nach Umfang dauert die Erstellung normalerweise einige Tage bis etwa eine Woche. Den genauen Zeitrahmen besprechen wir vor Beginn des Projekts.'],
      [['ablauf', 'schritte', 'zusammenarbeit', 'vorgehen', 'prozess'], 'Die Zusammenarbeit läuft in vier Schritten ab: 1. Sie nehmen Kontakt auf. 2. Wir besprechen Ihre Wünsche und vereinbaren den Preis. 3. Ich erstelle Ihre Website. 4. Gemeinsam prüfen wir das Ergebnis und veröffentlichen die Website. <a href="' + BASE + '#ablauf">Mehr zum Ablauf</a>.'],
      [['inklusive', 'enthalten', 'umfang'], 'Der Leistungsumfang wird individuell vereinbart. Dazu können beispielsweise Design, technische Umsetzung, mobile Optimierung und Kontaktmöglichkeiten gehören. Sie erfahren vorab genau, was enthalten ist.'],
      [['selbst ändern', 'selbst pflegen', 'cms', 'bearbeiten', 'editor'], 'Ja! Auf Wunsch kann ein Content-Management-System eingerichtet werden. Damit können Sie beispielsweise Texte und Bilder Ihrer Website selbst bearbeiten.'],
      [['text', 'bild', 'inhalt', 'material', 'foto', 'logo'], 'Sie benötigen nicht unbedingt fertige Texte oder Bilder. Wir besprechen gemeinsam, welche Inhalte gebraucht werden und was Sie bereits haben.'],
      [['bestehend', 'alte seite', 'umzug', 'relaunch', 'redesign'], 'Ja, auch bestehende Websites können überarbeitet werden. Vorhandene Inhalte und Bilder können nach Absprache übernommen werden.'],
      [['google', 'seo', 'gefunden', 'suchmaschine', 'ranking'], 'Ich achte auf eine saubere technische Grundlage für Suchmaschinen: passende Seitentitel, eine klare Struktur und schnelle Ladezeiten. Eine bestimmte Google-Platzierung kann allerdings nicht garantiert werden.'],
      [['leistung', 'angebot', 'was machen', 'was bieten', 'landingpage'], 'Ich biete Website-Erstellung, Redesign bestehender Websites, Landingpages und SEO-Grundlagen für lokale Unternehmen und Selbstständige an.'],
      [['wartung', 'update', 'support', 'pflege'], 'Auch nach der Veröffentlichung können weitere Betreuung, Updates und Anpassungen vereinbart werden.'],
      [['außerhalb', 'ausserhalb', 'digital', 'remote', 'entfernung', 'göppingen', 'region', 'donzdorf'], 'Ich bin im Raum Donzdorf und Göppingen tätig. Eine Zusammenarbeit ist aber auch vollständig digital möglich.'],
      [['wer', 'über freddy', 'freddy', 'person', 'team'], 'Freddy Hummel aus Donzdorf entwickelt die Websites persönlich. Sie haben einen direkten Ansprechpartner während des gesamten Projekts.'],
      [['kontakt', 'telefon', 'anruf', 'nummer', 'mail', 'erreichen'], 'Sie erreichen Freddy per E-Mail unter:<br><a href="mailto:freddyhummel.webdevelopment@gmail.com">freddyhummel.webdevelopment@gmail.com</a><br><br>Oder telefonisch unter:<br><a href="tel:+4915562839021">+49 155 62839021</a><br><br><a href="' + BASE + '#kontakt">Zum Kontaktformular</a>'],
      [['bewertung', 'rezension', 'referenz', 'erfahrung'], 'Kundinnen und Kunden können unter <a href="' + BASE + '#rezensionen">Rezensionen</a> eine Bewertung hinterlassen.'],
      [['impressum', 'agb', 'geschäftsbedingung', 'datenschutz', 'dsgvo'], 'Hier finden Sie die rechtlichen Informationen: <a href="' + BASE + 'impressum.html">Impressum</a>, <a href="' + BASE + 'agb.html">AGB</a> und <a href="' + BASE + 'datenschutz.html">Datenschutzerklärung</a>.'],
      [['danke', 'super', 'prima'], 'Gern geschehen! Wenn Sie weitere Fragen haben, helfe ich Ihnen gerne weiter.']
    ]
  },

  en: {
    sending: 'Sending …',
    contactSuccess: 'Thank you! Your message has been sent.',
    contactError: 'Your message could not be sent.',
    sendError: 'Error while sending',
    reviewSending: 'Sending …',
    reviewSubmit: 'Submit review',
    reviewSuccess: 'Thank you! Your review has been submitted and will be published after moderation.',
    reviewError: 'The review could not be submitted.',
    noReviews: 'There are no published reviews yet.',
    loadReviewsError: 'Reviews could not be loaded right now.',
    customer: 'Customer',
    assistant: 'Website assistant',
    automatic: 'Automatic replies, not a person',
    ai: 'AI assistant – responses may contain errors',
    close: 'Close assistant',
    open: 'Open assistant',
    question: 'Your question …',
    send: 'Send',
    chipsShow: 'Show frequently asked questions ▼',
    chipsHide: 'Hide frequently asked questions ▲',
    greeting: 'Hello! I can answer questions about this website. I am an automated assistant, not a person.',
    start: 'Of course! Four short questions will help prepare a project summary. Type "cancel" at any time to stop.',
    cancel: 'All right, cancelled.',
    summary: 'Thank you! This is a good starting point for a quote.',
    emailSummary: 'Send summary by email',
    contactForm: 'Use the contact form',
    fallback: 'I do not have a suitable answer. Contact Freddy directly:',
    flow: [
      ['What industry is your business in?', 'Industry'],
      ['What is the main goal of your website (e.g. enquiries, appointments, information)?', 'Goal'],
      ['What content do you already have (texts, logo, images)?', 'Content'],
      ['Which features do you need (e.g. contact form, gallery, online booking)?', 'Features']
    ],
    chips: [
      ['💶 How much does a website cost?', 'How much does a website cost?'],
      ['📋 How does the process work?', 'How does the collaboration work?'],
      ['⏱ How long does it take?', 'How long does website creation take?'],
      ['🛠 What services do you offer?', 'What services do you offer?'],
      ['✏️ Can I edit the website myself?', 'Can I edit my website myself?'],
      ['📞 How can I contact you?', 'How can I get in touch?']
    ],
    kb: [
      [['hello', 'hi', 'good morning', 'good afternoon', 'hey'], 'Hello! Great to have you here. I am happy to answer your questions about website development. What would you like to know?'],
      [['cost', 'price', 'expensive', 'budget', 'cheap'], 'The cost of a website depends on its scope, number of pages and required features. The price is discussed and agreed upon before the project starts. You will know the costs in advance. <a href="' + BASE + '#kontakt">Request a quote</a>.'],
      [['pay', 'payment', 'invoice', 'deposit'], 'Payment terms are agreed together before the project begins. All costs are discussed transparently before work starts.'],
      [['long', 'duration', 'time', 'weeks', 'days', 'finish'], 'Depending on the scope, a website usually takes a few days to about one week. The exact schedule is agreed before the project starts.'],
      [['process', 'steps', 'collaboration', 'procedure'], 'The process has four steps: 1. You get in touch. 2. We discuss your wishes and agree on the price. 3. I create your website. 4. We review the result together and publish the website. <a href="' + BASE + '#ablauf">Learn more about the process</a>.'],
      [['included', 'scope', 'features'], 'The scope is agreed individually. It can include design, technical implementation, mobile optimisation and contact options. You will know exactly what is included beforehand.'],
      [['edit', 'manage', 'cms', 'change', 'update myself'], 'Yes! A content management system can be set up on request. This allows you to edit texts and images on your website yourself.'],
      [['text', 'image', 'content', 'photo', 'logo'], 'You do not necessarily need finished texts or images. We can discuss together which content is needed and what you already have.'],
      [['existing', 'old website', 'redesign', 'relaunch'], 'Yes, existing websites can also be redesigned. Existing content and images can be reused by agreement.'],
      [['google', 'seo', 'search engine', 'ranking'], 'I focus on a solid technical foundation for search engines: suitable page titles, clear structure and fast loading times. A specific Google ranking cannot be guaranteed.'],
      [['service', 'offer', 'landing page'], 'I offer website creation, redesigns, landing pages and basic SEO for local businesses and self-employed professionals.'],
      [['maintenance', 'update', 'support'], 'Further support, updates and adjustments can also be agreed after publication.'],
      [['remote', 'distance', 'outside', 'region'], 'I work in the Donzdorf and Göppingen area. However, collaboration can also take place entirely online.'],
      [['who', 'about freddy', 'freddy', 'team'], 'Freddy Hummel from Donzdorf personally develops the websites. You have one direct contact throughout the entire project.'],
      [['contact', 'phone', 'number', 'email', 'reach'], 'You can reach Freddy by email:<br><a href="mailto:freddyhummel.webdevelopment@gmail.com">freddyhummel.webdevelopment@gmail.com</a><br><br>Or by phone:<br><a href="tel:+4915562839021">+49 155 62839021</a><br><br><a href="' + BASE + '#kontakt">Go to contact form</a>'],
      [['review', 'rating', 'reference', 'experience'], 'Customers can leave a review in the <a href="' + BASE + '#rezensionen">reviews section</a>.'],
      [['imprint', 'terms', 'privacy', 'gdpr'], 'You can find the legal information here: <a href="' + BASE + 'impressum.html">Legal notice</a>, <a href="' + BASE + 'agb.html">Terms and conditions</a> and <a href="' + BASE + 'datenschutz.html">Privacy policy</a>.'],
      [['thanks', 'thank you', 'great'], 'You are welcome! If you have any other questions, I will be happy to help.']
    ]
  },

  es: {
    sending: 'Enviando …',
    contactSuccess: '¡Muchas gracias! Tu mensaje ha sido enviado.',
    contactError: 'No se pudo enviar el mensaje.',
    sendError: 'Error al enviar',
    reviewSending: 'Enviando …',
    reviewSubmit: 'Enviar valoración',
    reviewSuccess: '¡Muchas gracias! Tu valoración ha sido enviada y se publicará después de su revisión.',
    reviewError: 'No se pudo enviar la valoración.',
    noReviews: 'Todavía no hay valoraciones publicadas.',
    loadReviewsError: 'No se pudieron cargar las valoraciones.',
    customer: 'Cliente',
    assistant: 'Asistente web',
    automatic: 'Respuestas automáticas, no es una persona',
    ai: 'Asistente de IA – las respuestas pueden contener errores',
    close: 'Cerrar asistente',
    open: 'Abrir asistente',
    question: 'Tu pregunta …',
    send: 'Enviar',
    chipsShow: 'Mostrar preguntas frecuentes ▼',
    chipsHide: 'Ocultar preguntas frecuentes ▲',
    greeting: '¡Hola! Puedo responder preguntas sobre esta página web. Soy un asistente automático, no una persona.',
    start: '¡Claro! Cuatro preguntas breves ayudarán a preparar un resumen del proyecto. Escribe "cancelar" para detenerlo en cualquier momento.',
    cancel: 'De acuerdo, cancelado.',
    summary: '¡Gracias! Esta información servirá como base para un presupuesto.',
    emailSummary: 'Enviar resumen por correo electrónico',
    contactForm: 'Utilizar el formulario de contacto',
    fallback: 'No tengo una respuesta adecuada. Puedes contactar directamente con Freddy:',
    flow: [
      ['¿A qué sector pertenece tu empresa?', 'Sector'],
      ['¿Cuál es el objetivo principal de la página web (por ejemplo, consultas, citas o información)?', 'Objetivo'],
      ['¿Qué contenidos tienes ya (textos, logotipo, imágenes)?', 'Contenido'],
      ['¿Qué funciones necesitas (por ejemplo, formulario, galería o reservas online)?', 'Funciones']
    ],
    chips: [
      ['💶 ¿Cuánto cuesta una página web?', '¿Cuánto cuesta una página web?'],
      ['📋 ¿Cómo funciona el proceso?', '¿Cómo funciona la colaboración?'],
      ['⏱ ¿Cuánto tiempo se tarda?', '¿Cuánto tiempo tarda la creación?'],
      ['🛠 ¿Qué servicios ofreces?', '¿Qué servicios ofreces?'],
      ['✏️ ¿Puedo editar la web yo mismo?', '¿Puedo editar mi página web yo mismo?'],
      ['📞 ¿Cómo puedo contactar?', '¿Cómo puedo contactar contigo?']
    ],
    kb: [
      [['hola', 'buenos días', 'buenas tardes', 'hey'], '¡Hola! Me alegra que estés aquí. Estaré encantado de responder a tus preguntas sobre la creación de páginas web. ¿Qué te gustaría saber?'],
      [['coste', 'costo', 'precio', 'caro', 'presupuesto', 'barato'], 'El coste de una página web depende del alcance, del número de páginas y de las funciones deseadas. El precio se acuerda antes de comenzar el proyecto. Así sabrás de antemano cuánto costará. <a href="' + BASE + '#kontakt">Solicitar información</a>.'],
      [['pagar', 'pago', 'factura', 'anticipo'], 'Las condiciones de pago se acuerdan conjuntamente antes de comenzar el proyecto. Todos los costes se explican de forma transparente.'],
      [['duración', 'tiempo', 'tardar', 'semanas', 'días'], 'Dependiendo del alcance, la creación suele durar entre unos días y aproximadamente una semana. El plazo exacto se acuerda antes de empezar.'],
      [['proceso', 'pasos', 'colaboración', 'procedimiento'], 'La colaboración consta de cuatro pasos: 1. Te pones en contacto. 2. Hablamos de tus deseos y acordamos el precio. 3. Creo tu página web. 4. Revisamos el resultado juntos y publicamos la web. <a href="' + BASE + '#ablauf">Más información</a>.'],
      [['incluye', 'incluido', 'alcance', 'funciones'], 'El alcance se acuerda individualmente. Puede incluir diseño, desarrollo técnico, optimización para móviles y opciones de contacto. Sabrás exactamente qué está incluido antes de empezar.'],
      [['editar', 'modificar', 'cms', 'gestionar'], '¡Sí! Si lo deseas, se puede configurar un sistema de gestión de contenidos. Así podrás modificar los textos y las imágenes de tu página web.'],
      [['texto', 'imagen', 'contenido', 'foto', 'logotipo'], 'No necesitas tener todos los textos o imágenes preparados. Podemos hablar juntos sobre qué contenidos hacen falta y cuáles tienes ya.'],
      [['existente', 'página antigua', 'rediseño', 'renovar'], 'Sí, también se pueden renovar páginas web existentes. Los contenidos y las imágenes actuales pueden reutilizarse previo acuerdo.'],
      [['google', 'seo', 'buscador', 'posicionamiento'], 'Presto atención a una buena base técnica para los buscadores: títulos adecuados, estructura clara y tiempos de carga rápidos. No se puede garantizar una posición concreta en Google.'],
      [['servicio', 'oferta', 'landing page'], 'Ofrezco creación de páginas web, rediseño de sitios existentes, landing pages y fundamentos de SEO para empresas locales y autónomos.'],
      [['mantenimiento', 'actualización', 'soporte'], 'También se pueden acordar servicios de mantenimiento, actualizaciones y modificaciones después de publicar la página.'],
      [['distancia', 'remoto', 'región', 'fuera'], 'Trabajo en la zona de Donzdorf y Göppingen. Sin embargo, la colaboración también puede realizarse completamente online.'],
      [['quién', 'sobre freddy', 'freddy', 'equipo'], 'Freddy Hummel, de Donzdorf, desarrolla personalmente las páginas web. Tendrás una persona de contacto directa durante todo el proyecto.'],
      [['contacto', 'teléfono', 'número', 'correo', 'email'], 'Puedes contactar con Freddy por correo electrónico:<br><a href="mailto:freddyhummel.webdevelopment@gmail.com">freddyhummel.webdevelopment@gmail.com</a><br><br>O por teléfono:<br><a href="tel:+4915562839021">+49 155 62839021</a><br><br><a href="' + BASE + '#kontakt">Ir al formulario de contacto</a>'],
      [['valoración', 'reseña', 'opinión', 'referencia'], 'Los clientes pueden dejar una valoración en la sección de <a href="' + BASE + '#rezensionen">opiniones</a>.'],
      [['aviso legal', 'condiciones', 'privacidad', 'datos personales'], 'Aquí encontrarás la información legal: <a href="' + BASE + 'impressum.html">Aviso legal</a>, <a href="' + BASE + 'agb.html">Condiciones generales</a> y <a href="' + BASE + 'datenschutz.html">Política de privacidad</a>.'],
      [['gracias', 'genial', 'perfecto'], '¡De nada! Si tienes más preguntas, estaré encantado de ayudarte.']
    ]
  },

  fr: {
    sending: 'Envoi en cours …',
    contactSuccess: 'Merci beaucoup ! Votre message a été envoyé.',
    contactError: 'Votre message n’a pas pu être envoyé.',
    sendError: 'Erreur lors de l’envoi',
    reviewSending: 'Envoi en cours …',
    reviewSubmit: 'Envoyer l’avis',
    reviewSuccess: 'Merci ! Votre avis a été envoyé et sera publié après vérification.',
    reviewError: 'L’avis n’a pas pu être envoyé.',
    noReviews: 'Aucun avis publié pour le moment.',
    loadReviewsError: 'Les avis ne peuvent pas être chargés pour le moment.',
    customer: 'Client',
    assistant: 'Assistant du site web',
    automatic: 'Réponses automatiques, pas une personne',
    ai: 'Assistant IA – les réponses peuvent contenir des erreurs',
    close: 'Fermer l’assistant',
    open: 'Ouvrir l’assistant',
    question: 'Votre question …',
    send: 'Envoyer',
    chipsShow: 'Afficher les questions fréquentes ▼',
    chipsHide: 'Masquer les questions fréquentes ▲',
    greeting: 'Bonjour ! Je peux répondre à vos questions concernant ce site web. Je suis un assistant automatique, pas une personne.',
    start: 'Bien sûr ! Quatre petites questions permettront de préparer un résumé de votre projet. Tapez « annuler » pour arrêter à tout moment.',
    cancel: 'Très bien, opération annulée.',
    summary: 'Merci ! Ces informations serviront de base à un devis.',
    emailSummary: 'Envoyer le résumé par e-mail',
    contactForm: 'Utiliser le formulaire de contact',
    fallback: 'Je ne dispose pas de réponse adaptée. Vous pouvez contacter Freddy directement :',
    flow: [
      ['Dans quel secteur votre entreprise travaille-t-elle ?', 'Secteur'],
      ['Quel est l’objectif principal du site web (par exemple, demandes, rendez-vous, informations) ?', 'Objectif'],
      ['Quels contenus possédez-vous déjà (textes, logo, images) ?', 'Contenus'],
      ['Quelles fonctionnalités souhaitez-vous (par exemple, formulaire, galerie, réservation en ligne) ?', 'Fonctionnalités']
    ],
    chips: [
      ['💶 Combien coûte un site web ?', 'Combien coûte un site web ?'],
      ['📋 Comment se déroule le projet ?', 'Comment se déroule la collaboration ?'],
      ['⏱ Combien de temps faut-il ?', 'Combien de temps prend la création ?'],
      ['🛠 Quels services proposez-vous ?', 'Quels services proposez-vous ?'],
      ['✏️ Puis-je modifier le site moi-même ?', 'Puis-je modifier mon site moi-même ?'],
      ['📞 Comment vous contacter ?', 'Comment puis-je vous contacter ?']
    ],
    kb: [
      [['bonjour', 'salut', 'bonsoir', 'coucou'], 'Bonjour ! Ravi de vous accueillir. Je réponds volontiers à vos questions concernant la création de sites web. Que souhaitez-vous savoir ?'],
      [['coût', 'cout', 'prix', 'cher', 'budget'], 'Le coût d’un site web dépend de son étendue, du nombre de pages et des fonctionnalités souhaitées. Le prix est discuté et convenu avant le début du projet. Vous connaissez donc les coûts à l’avance. <a href="' + BASE + '#kontakt">Demander un devis</a>.'],
      [['payer', 'paiement', 'facture', 'acompte'], 'Les conditions de paiement sont convenues ensemble avant le début du projet. Tous les coûts sont expliqués de manière transparente.'],
      [['durée', 'temps', 'longtemps', 'semaines', 'jours'], 'Selon l’étendue du projet, la création prend généralement quelques jours à environ une semaine. Le délai exact est convenu avant le début du projet.'],
      [['déroulement', 'étapes', 'collaboration', 'processus'], 'La collaboration se déroule en quatre étapes : 1. Vous me contactez. 2. Nous discutons de vos souhaits et convenons du prix. 3. Je crée votre site web. 4. Nous vérifions ensemble le résultat et publions le site. <a href="' + BASE + '#ablauf">En savoir plus</a>.'],
      [['inclus', 'compris', 'étendue', 'fonctionnalités'], 'Les prestations sont définies individuellement. Elles peuvent inclure le design, la réalisation technique, l’optimisation mobile et les moyens de contact. Vous saurez exactement ce qui est inclus avant le début du projet.'],
      [['modifier', 'éditer', 'cms', 'gérer'], 'Oui ! Un système de gestion de contenu peut être installé sur demande. Vous pourrez ainsi modifier vous-même les textes et les images de votre site web.'],
      [['texte', 'image', 'contenu', 'photo', 'logo'], 'Vous n’avez pas nécessairement besoin de textes ou d’images déjà préparés. Nous pouvons discuter ensemble des contenus nécessaires et de ceux que vous possédez déjà.'],
      [['existant', 'ancien site', 'refonte', 'redesign'], 'Oui, les sites web existants peuvent également être modernisés. Les contenus et images existants peuvent être repris après accord.'],
      [['google', 'seo', 'référencement', 'moteur de recherche'], 'Je veille à une bonne base technique pour les moteurs de recherche : titres adaptés, structure claire et temps de chargement rapides. Un classement précis sur Google ne peut toutefois pas être garanti.'],
      [['service', 'offre', 'landing page'], 'Je propose la création de sites web, la refonte de sites existants, des landing pages et les bases du référencement SEO pour les entreprises locales et les indépendants.'],
      [['maintenance', 'mise à jour', 'support'], 'Un accompagnement supplémentaire, des mises à jour et des modifications peuvent également être convenus après la publication.'],
      [['distance', 'à distance', 'région', 'extérieur'], 'Je travaille dans la région de Donzdorf et Göppingen. La collaboration peut toutefois se dérouler entièrement en ligne.'],
      [['qui', 'freddy', 'équipe', 'à propos'], 'Freddy Hummel, de Donzdorf, développe personnellement les sites web. Vous disposez d’un interlocuteur direct pendant toute la durée du projet.'],
      [['contact', 'téléphone', 'numéro', 'mail', 'e-mail'], 'Vous pouvez contacter Freddy par e-mail :<br><a href="mailto:freddyhummel.webdevelopment@gmail.com">freddyhummel.webdevelopment@gmail.com</a><br><br>Ou par téléphone :<br><a href="tel:+4915562839021">+49 155 62839021</a><br><br><a href="' + BASE + '#kontakt">Accéder au formulaire de contact</a>'],
      [['avis', 'évaluation', 'référence', 'expérience'], 'Les clients peuvent laisser un avis dans la section <a href="' + BASE + '#rezensionen">avis</a>.'],
      [['mentions légales', 'conditions', 'confidentialité', 'rgpd'], 'Vous trouverez ici les informations légales : <a href="' + BASE + 'impressum.html">Mentions légales</a>, <a href="' + BASE + 'agb.html">Conditions générales</a> et <a href="' + BASE + 'datenschutz.html">Politique de confidentialité</a>.'],
      [['merci', 'super', 'parfait'], 'Avec plaisir ! Si vous avez d’autres questions, je serai ravi de vous aider.']
    ]
  }
};

var L = TXT[LANG] || TXT.de;

/* ===== Kontaktformular ===== */
(function () {
  var f = document.getElementById('contact-form');
  if (!f) return;

  var msg = document.getElementById('form-msg');
  var btn = f.querySelector('button[type="submit"]');

  f.addEventListener('submit', async function (e) {
    e.preventDefault();

    var honey = f.querySelector('[name="_honey"]');
    if (honey && honey.value) return;

    btn.disabled = true;
    msg.textContent = L.sending;

    try {
      var payload = {
        name: document.getElementById('c-name').value.trim(),
        email: document.getElementById('c-mail').value.trim(),
        phone: document.getElementById('c-tel').value.trim(),
        message: document.getElementById('c-msg').value.trim()
      };

      var res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      var data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || L.sendError);
      }

      msg.textContent = L.contactSuccess;
      f.reset();

    } catch (err) {
      console.error('Kontaktformular:', err);
      msg.textContent = err.message || L.contactError;
    } finally {
      btn.disabled = false;
    }
  });
})();

/* ===== Chatbot ===== */
(function () {
  var MAIL = 'freddyhummel.webdevelopment@gmail.com';
  var TEL = '+49 155 62839021';
  var KB = L.kb.map(function (e) {
    return { k: e[0], a: e[1] };
  });

  var FLOW = L.flow;
  var flow = null;
  var answers = [];

  var fab = document.createElement('button');
  fab.className = 'cb-fab';
  fab.setAttribute('aria-label', L.open);
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V5M9.5 5h5"/><circle cx="9" cy="13.5" r="1.2" fill="currentColor"/><circle cx="15" cy="13.5" r="1.2" fill="currentColor"/></svg>';

  var box = document.createElement('div');
  box.className = 'cb';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', L.assistant);

  box.innerHTML =
    '<div class="cb-h"><div><strong>' + L.assistant + '</strong><small>' + L.automatic + '</small></div><button aria-label="' + L.close + '">×</button></div>' +
    '<div class="cb-m" aria-live="polite"></div>' +
    '<div class="chips"></div>' +
    '<form class="cb-f"><input placeholder="' + L.question + '" aria-label="' + L.question + '" maxlength="200"><button class="btn sm" type="submit">' + L.send + '</button></form>';

  var chipsToggle = document.createElement('button');
  chipsToggle.type = 'button';
  chipsToggle.className = 'cb-chips-toggle';
  chipsToggle.textContent = L.chipsShow;

  var chipsElement = box.querySelector('.chips');
  chipsElement.hidden = true;
  chipsElement.parentNode.insertBefore(chipsToggle, chipsElement);

  chipsToggle.addEventListener('click', function () {
    var open = !chipsElement.hidden;
    chipsElement.hidden = open;
    chipsToggle.textContent = open ? L.chipsShow : L.chipsHide;
  });

  document.body.append(box, fab);

  if (CFG.botEndpoint) {
    box.querySelector('small').textContent = L.ai;
  }

  var m = box.querySelector('.cb-m');
  var chips = box.querySelector('.chips');
  var inp = box.querySelector('input');

  function add(t, who, html) {
    var d = document.createElement('div');
    d.className = 'msg ' + who;
    if (html) d.innerHTML = t;
    else d.textContent = t;
    m.appendChild(d);
    m.scrollTop = m.scrollHeight;
  }

  function setChips(a) {
    chips.textContent = '';
    a.forEach(function (x) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = x[0];
      b.onclick = x[1];
      chips.appendChild(b);
    });
  }

  function home() {
    setChips(L.chips.map(function (item) {
      return [item[0], function () { ask(item[1]); }];
    }));
  }

  function reply(q) {
    var t = ' ' + q.toLowerCase() + ' ';
    var best = null;
    var bs = 0;

    KB.forEach(function (e) {
      var s = 0;
      e.k.forEach(function (w) {
        if (t.indexOf(w) > -1) s++;
      });
      if (s > bs) {
        bs = s;
        best = e;
      }
    });

    return best ? best.a :
      L.fallback + ' <a href="mailto:' + MAIL + '">' + MAIL +
      '</a> oder <a href="tel:+4915562839021">' + TEL + '</a>.';
  }

  function findFixedAnswer(q) {
    var t = ' ' + q.toLowerCase() + ' ';
    var best = null;
    var bs = 0;

    KB.forEach(function (e) {
      var score = 0;
      e.k.forEach(function (w) {
        if (t.indexOf(w) > -1) score++;
      });
      if (score > bs) {
        bs = score;
        best = e;
      }
    });

    return best ? best.a : null;
  }

  var hist = [];

  function aiReply(q) {
    hist.push({ role: 'user', content: q });

    var d = document.createElement('div');
    d.className = 'msg bot';
    d.style.whiteSpace = 'pre-wrap';
    d.textContent = '…';
    m.appendChild(d);
    m.scrollTop = m.scrollHeight;

    fetch(CFG.botEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: hist.slice(-8) })
    })
      .then(function (r) {
        if (!r.ok) throw 0;
        return r.json();
      })
      .then(function (j) {
        var t = (typeof j.reply === 'string' ? j.reply : '').trim();
        if (!t) throw 0;
        hist.push({ role: 'assistant', content: t });
        d.textContent = t;
        m.scrollTop = m.scrollHeight;
      })
      .catch(function () {
        hist.pop();
        d.style.whiteSpace = '';
        d.innerHTML = reply(q);
      });
  }

  function ask(q) {
    add(q, 'me');

    if (flow !== null) {
      if (/abbrech|cancel|annuler|cancelar/i.test(q)) {
        flow = null;
        add(L.cancel, 'bot');
        home();
        return;
      }

      answers.push(q);
      flow++;

      if (flow < FLOW.length) {
        add(FLOW[flow][0], 'bot');
        return;
      }

      var sum = FLOW.map(function (f, i) {
        return f[1] + ': ' + answers[i];
      }).join('\n');

      var href = 'mailto:' + MAIL +
        '?subject=' + encodeURIComponent('Website inquiry') +
        '&body=' + encodeURIComponent('Hallo Freddy,\n\n' + sum);

      add(
        L.summary + ' <a href="' + href + '">' + L.emailSummary +
        '</a> oder <a href="' + BASE + '#kontakt">' + L.contactForm + '</a>.',
        'bot',
        true
      );

      flow = null;
      home();
      return;
    }

    var fixedAnswer = findFixedAnswer(q);

    if (fixedAnswer) {
      add(fixedAnswer, 'bot', true);
    } else if (CFG.botEndpoint) {
      aiReply(q);
    } else {
      setTimeout(function () {
        add(reply(q), 'bot', true);
      }, 250);
    }
  }

  function open() {
    box.classList.add('open');
    fab.setAttribute('aria-label', L.close);
    inp.focus();
  }

  function close() {
    box.classList.remove('open');
    fab.setAttribute('aria-label', L.open);
  }

  function startFlow() {
    open();
    flow = 0;
    answers = [];
    add(L.start, 'bot');
    add(FLOW[0][0], 'bot');
    chips.textContent = '';
  }

  function toggle() {
    if (box.classList.contains('open')) close();
    else open();
  }

  fab.addEventListener('click', toggle);
  box.querySelector('.cb-h button').addEventListener('click', close);

  box.querySelector('form').onsubmit = function (e) {
    e.preventDefault();
    var v = inp.value.trim();
    if (!v) return;
    inp.value = '';
    ask(v);
  };

  document.querySelectorAll('[data-open-bot]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      startFlow();
    });
  });

  add(L.greeting, 'bot');
  home();
})();

/* ===== Rezensionen ===== */
document.addEventListener('DOMContentLoaded', function () {
  var reviewForm = document.getElementById('review-form');
  var reviewList = document.getElementById('review-list');

  var dateLocales = {
    de: 'de-DE',
    en: 'en-GB',
    es: 'es-ES',
    fr: 'fr-FR'
  };

  function formatReviewDate(dateValue) {
    if (!dateValue) return '';

    var date = new Date(dateValue + 'T00:00:00');

    if (isNaN(date.getTime())) return '';

    return new Intl.DateTimeFormat(dateLocales[LANG] || 'de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  async function loadReviews() {
    if (!reviewList) return;

    try {
      var res = await fetch(
        '/api/reviews?lang=' + encodeURIComponent(LANG),
        { cache: 'no-store' }
      );

      if (!res.ok) {
        throw new Error(L.loadReviewsError);
      }

      var data = await res.json();
      var reviews = Array.isArray(data.reviews) ? data.reviews : [];

      reviewList.replaceChildren();

      if (!reviews.length) {
        reviewList.textContent = L.noReviews;
        return;
      }

      reviews.forEach(function (r) {
        var card = document.createElement('div');
        card.className = 'card';

        var name = document.createElement('strong');
        name.textContent = r.name || L.customer;

        var date = document.createElement('small');
        date.className = 'review-date';

        var formattedDate = formatReviewDate(r.date);

        if (formattedDate) {
         date.textContent = '  ' + formattedDate;
        }

        var stars = document.createElement('div');
        stars.className = 'stars';

        var rating = Math.max(1, Math.min(5, Number(r.rating) || 5));
        stars.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);

        var text = document.createElement('p');
        text.textContent = r.text || '';

        card.append(name);

        if (formattedDate) {
          card.append(date);
        }

        card.append(stars, text);
        reviewList.appendChild(card);
      });

    } catch (err) {
      console.error('Rezensionen laden:', err);
      reviewList.textContent = L.loadReviewsError;
    }
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      var btn = reviewForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = L.reviewSending;

      try {
        var payload = {
          name: document.getElementById('r-name').value.trim(),
          rating: Number(document.getElementById('r-rating').value),
          text: document.getElementById('r-text').value.trim()
        };

        var res = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        var data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || L.reviewError);
        }

        reviewForm.reset();
        alert(L.reviewSuccess);

      } catch (err) {
        console.error('Bewertung senden:', err);
        alert(err.message || L.reviewError);
      } finally {
        btn.disabled = false;
        btn.textContent = L.reviewSubmit;
      }
    });
  }

  loadReviews();
});
