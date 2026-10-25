'use strict';
const projects=[
  {
    "id": "lstm-toxicity",
    "category": "ml",
    "type": "NLP / DEEP LEARNING",
    "label": "INDIVIDUAL ACADEMIC PROJECT",
    "title": "Teaching a model to read between the words.",
    "subtitle": "Context-aware toxicity detection with BiLSTM + WSD",
    "description": "Exploring context-sensitive toxic language with a bidirectional LSTM, GloVe embeddings, word sense disambiguation, and a toxic lexicon.",
    "tags": [
      "BiLSTM",
      "GloVe",
      "WordNet",
      "Python"
    ],
    "problem": "A word can be harmless in one sentence and offensive in another. This project explores a hybrid approach to binary toxic-comment classification that combines sequential text features, word senses, and explicit lexicon signals.",
    "data": "159,571 Jigsaw comments, with approximately 10.2% labelled toxic. The data was divided into training, validation, and test sets; the held-out test set contained 23,936 comments.",
    "method": [
      "Normalized noisy text and obfuscated spellings, then generated 300-dimensional GloVe embeddings.",
      "Used POS tagging, the Lesk algorithm, and WordNet definitions for word sense disambiguation. Blended original and sense embeddings at an 80:20 ratio.",
      "Combined a two-layer bidirectional LSTM with three features from a 4,681-term toxic lexicon.",
      "Applied weighted sampling, focal loss, dropout, and early stopping. Tuned the decision threshold to 0.55 on validation data."
    ],
    "results": [
      [
        "93.24%",
        "Test accuracy"
      ],
      [
        "0.6715",
        "Toxic-class F1"
      ],
      [
        "68.00%",
        "Toxic-class recall"
      ]
    ],
    "finding": "The model identified 1,655 of 2,434 toxic test comments. The project provided practical experience with hybrid NLP modelling, class imbalance, threshold selection, and error analysis.",
    "limitations": "The reported toxic-class F1 did not outperform the strongest classical models from the earlier project. Limited embedding coverage and overfitting remain areas for improvement. Context sensitivity is the design goal; the results do not establish reliable handling of every ambiguous or sarcastic expression.",
    "contribution": "Individual final project for ITCS-665 Natural Language Processing. Modelling and analysis by Thant Zin Myo.",
    "links": [
      [
        "Project report (PDF)",
        "assets/sources/lstm-wsd-report.pdf"
      ]
    ],
    "visual": "lstm"
  },
  {
    "id": "sales-analysis",
    "category": "analysis",
    "type": "BUSINESS / DATA ANALYSIS",
    "label": "PORTFOLIO PROJECT",
    "title": "Three sales channels. One clearer picture.",
    "subtitle": "Sales performance analysis with Python",
    "description": "Comparing Email, Call, and Email + Call across 15,000 customer records to understand reach, revenue, and customer value.",
    "tags": [
      "pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly"
    ],
    "problem": "Which sales approach generates the most total revenue, and which produces the highest revenue per customer? The analysis compares three outreach methods across a six-week dataset.",
    "data": "15,000 customer records covering three sales methods and 50 US states. Revenue was missing in 1,074 records (7.16%).",
    "method": [
      "Standardized inconsistent sales-method labels and filled missing revenue with the mean for its sales method.",
      "Compared customer counts, product sales, total revenue, and mean revenue by channel.",
      "Explored weekly patterns, regional engagement, revenue distributions, and outliers.",
      "Produced charts and a written report with recommendations for outreach and follow-up."
    ],
    "results": [
      [
        "15,000",
        "Customer records"
      ],
      [
        "50.6%",
        "Revenue share: email"
      ],
      [
        "1.92×",
        "Hybrid revenue / customer vs average"
      ]
    ],
    "finding": "Email produced the largest share of total revenue. Email + Call produced the highest mean revenue per customer, supporting a recommendation for broad email outreach with targeted follow-up.",
    "limitations": "Revenue comparisons include imputed values and describe associations in the dataset. The analysis does not demonstrate that a channel causes higher revenue, or measure profit after fully accounting for outreach costs.",
    "contribution": "Python analysis and written reporting presented in the linked portfolio repository.",
    "links": [
      [
        "View GitHub repository",
        "https://github.com/karengsengli/Python-SaleAnalysis-Report"
      ],
      [
        "Read analysis report",
        "https://github.com/karengsengli/Python-SaleAnalysis-Report/blob/master/Report-Notebook.ipynb"
      ]
    ],
    "visual": "sales"
  },
  {
    "id": "student-analytics",
    "category": "analysis",
    "type": "LEARNING ANALYTICS / ML",
    "label": "GROUP ACADEMIC PROJECT",
    "title": "What can coding attempts tell us?",
    "subtitle": "Student submission behavior and classification",
    "description": "Transforming university coding logs into submission-level data to explore retry patterns, timing, and test-case success.",
    "tags": [
      "JSONL",
      "SciPy",
      "scikit-learn",
      "Hypothesis testing"
    ],
    "problem": "How are retry behavior and submission timing associated with success in university programming exercises? A second task explores classification of submissions by their attempt-number category.",
    "data": "JSONL logs from ITCS113 and ITDS120 lab and exam activities. The cleaned submission table contained 263,244 records; the modelling table retained 252,542 records after filtering extreme attempt numbers.",
    "method": [
      "Parsed nested JSONL execution and test results, standardized outcome labels, and removed system-error records.",
      "Aggregated test cases into submissions and calculated sequential attempts for each student–exercise pair.",
      "Used visualization, Shapiro–Wilk, Levene’s, and Mann–Whitney U tests to examine attempt and timing patterns.",
      "Built a pipeline with feature scaling, degree-two polynomial features, and balanced Logistic Regression. Evaluated an 80:20 random split and five-fold cross-validation."
    ],
    "results": [
      [
        "263,244",
        "Cleaned submissions"
      ],
      [
        "63.7%",
        "Test accuracy"
      ],
      [
        "0.68",
        "F1: ≤10 attempt category"
      ]
    ],
    "finding": "The analysis found an association between attempt number and successful submissions. The classifier showed moderate performance distinguishing submissions at attempt numbers of 10 or fewer from those above 10.",
    "limitations": "This is a three-person group project. The model classifies attempt-number categories using submission features; it does not establish a student’s eventual total attempts or predict learning success in advance. A random submission split does not establish generalization to entirely new students.",
    "contribution": "Collaborative academic work by a three-person team including Thant Zin Myo. The source materials do not assign individual implementation responsibilities, so team results are presented as team work.",
    "links": [
      [
        "View GitHub repository",
        "https://github.com/karengsengli/Student-Coding-Behavior-Analysis-and-Machine-Learning"
      ],
      [
        "Project summary (PDF)",
        "assets/sources/student-analytics-summary.pdf"
      ]
    ],
    "visual": "student"
  },
  {
    "id": "classical-nlp",
    "category": "ml",
    "type": "NLP / MODEL COMPARISON",
    "label": "ACADEMIC PROJECT",
    "title": "Finding toxic patterns in text.",
    "subtitle": "Classical machine learning for toxicity detection",
    "description": "Comparing four text-classification configurations, from TF-IDF baselines to lexicon-enriched Bag-of-Words models.",
    "tags": [
      "NLTK",
      "TF-IDF",
      "Logistic Regression",
      "Naive Bayes"
    ],
    "problem": "How do text representation and toxic lexicon enrichment affect toxic-comment classification using classical machine learning?",
    "data": "159,571 Jigsaw comments, with six toxicity labels collapsed into one binary target. An 80:20 stratified split produced a test set of 31,915 comments. Experiments added 4,760 toxic lexicon entries to training.",
    "method": [
      "Cleaned text, expanded contractions, tokenized, removed stopwords, and lemmatized with NLTK.",
      "Compared Multinomial Naive Bayes and Logistic Regression using TF-IDF and lexicon-enriched Bag-of-Words configurations.",
      "Evaluated accuracy, toxic-class precision, recall, F1, and confusion matrices on a shared test set."
    ],
    "results": [
      [
        "0.7062",
        "Best toxic-class F1"
      ],
      [
        "93.75%",
        "Best-F1 model accuracy"
      ],
      [
        "73.84%",
        "Best-F1 model recall"
      ]
    ],
    "finding": "The lexicon-enriched Bag-of-Words Logistic Regression model had the highest toxic-class F1 among the four configurations in the notebook. Different configurations exposed trade-offs between precision and recall.",
    "limitations": "Lexicon matching and sparse text features do not reliably resolve context, sarcasm, or new slang. Results are from the notebook’s saved evaluation and are not evidence of production moderation performance.",
    "contribution": "Academic modelling project presented in the linked GitHub repository; precursor to the individual BiLSTM–WSD final project.",
    "links": [
      [
        "View GitHub repository",
        "https://github.com/karengsengli/NLP-ToxicWordDetectionModel"
      ],
      [
        "Project report (PDF)",
        "assets/sources/classical-toxicity-report.pdf"
      ]
    ],
    "visual": "nlp"
  },
  {
    "id": "project-dashboard",
    "category": "bi",
    "type": "POWER BI / PROJECT MANAGEMENT",
    "label": "INDIVIDUAL ACADEMIC PROJECT",
    "title": "A project’s health, at a glance.",
    "subtitle": "Software delivery planning and monitoring dashboard",
    "description": "Bringing eight planning workbooks into dashboard views for schedule, cost, quality, risks, stakeholders, and change control.",
    "tags": [
      "Power BI",
      "Excel",
      "WBS",
      "RACI"
    ],
    "problem": "How can a small software team monitor delivery using a manageable set of project health metrics? The Campus Event App case study explores a lightweight dashboard framework.",
    "data": "Eight Excel workbooks covering project selection, stakeholders, scheduling, budget, risks, changes, quality, and overview. The case includes eight deliverables, 11 activities, three registered risks, and two change requests.",
    "method": [
      "Organized deliverable and activity work breakdown structures, task dependencies, and a RACI matrix.",
      "Compared resource-based and function-point estimates and tracked spending against the case-study budget.",
      "Structured risk responses, stakeholder engagement records, change-impact assessments, and weighted quality metrics.",
      "Built Power BI dashboard views for delivery and project-health monitoring, and documented the framework in a research report."
    ],
    "results": [
      [
        "08",
        "Source workbooks"
      ],
      [
        "11",
        "Planned activities"
      ],
      [
        "06",
        "Core health indicators"
      ]
    ],
    "finding": "The dashboard brings schedule, budget, scope, quality, risk, and overall status into one overview, with supporting views for stakeholders and changes.",
    "limitations": "The dashboard describes an academic case study. Its budget and schedule figures should not be interpreted as independently verified business savings or proof that the dashboard improved delivery.",
    "contribution": "Individual assignment for ITCS514 Software Project Management, authored by Thant Zin Myo.",
    "links": [
      [
        "View GitHub repository",
        "https://github.com/karengsengli/ProjectHealthDashboard"
      ],
      [
        "Project report (PDF)",
        "assets/sources/project-health-report.pdf"
      ],
      [
        "Dashboard views (PDF)",
        "assets/sources/project-dashboard.pdf"
      ]
    ],
    "visual": "dashboard"
  }
];
