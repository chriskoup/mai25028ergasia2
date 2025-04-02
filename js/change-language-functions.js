var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Ένταξη στο Μητρώο Επιμελητών/-τριών της δράσης Νταντάδες της Γειτονιάς",
      pageTitle: "Ένταξη στο Μητρώο Επιμελητών/-τριών της δράσης Νταντάδες της Γειτονιάς",
      infoTitle: "Πληροφορίες για την Ένταξη στο Μητρώο Επιμελητών/-τριών της δράσης Νταντάδες της Γειτονιάς",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει στην υποβολή αιτήσεων εκδήλωσης ενδιαφέροντος ένταξης στο Μητρώο Επιμελητών/-τριών στο πλαίσιο της δράσης Νταντάδες της Γειτονιάς.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για τις ανάγκες εργασίας στο μάθημα Συστήματα Ηλεκτρονικής Διακυβέρνησης στο μεταπτυχιακό Συστήματα και Δίκτυα Επόμενης Γενιάς της Εφαρμοσνένης Πληροφορικής στο Πανεπιστήμιο Μακεδονίας. Η εργασία είναι ατομική:",
      student: "Χρήστος Κουπίδης",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Inclusion in the Register of Curators of the Neighborhood Nannies Action",
      pageTitle: "Inclusion in the Register of Curators of the Neighborhood Nannies Action",
      infoTitle: "Information on the Inclusion in the Register of Curators of the Neighborhood Nannies action",
      subTitle1: "This questionnaire can help you in submitting applications for expressing interest in joining the Registry of Curators within the framework of the Neighborhood Nannies action.",
      subTitle2: "Completing the questionnaire should not take more than 10 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of the work in the course E-Government Systems in the postgraduate program Next Generation Systems and Networks of Applied Informatics at the University of Macedonia. The work is individual:",
      student: "Xristos Koupidis",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();