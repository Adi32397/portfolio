# CivicShield: AI-Powered MPLADS Anomaly, Risk and Duplicate Project Detection System
> **Intelligent Monitoring, Financial Analytics and Verification Support for Public Development Projects**

---

## 1. Project Title & Metadata
- **Project Title:** CivicShield: AI-Powered MPLADS Anomaly, Risk and Duplicate Project Detection System
- **Subtitle:** Intelligent Monitoring, Financial Analytics and Verification Support for Public Development Projects
- **Domain:** Public Finance & Governance Project Monitoring
- **Core Stack:** React.js, Node.js, Express.js, MySQL, Python (Isolation Forest)
- **Role:** Technical Decision Support & Anomaly Screening Platform

---

## Two-Column Overview Layout

### [ Left Column ]

#### 2. Overview
CivicShield is an AI-assisted monitoring platform designed to help authorities analyze projects under the **Members of Parliament Local Area Development Scheme (MPLADS)**. It combines financial analytics, rule-based risk scoring, machine-learning anomaly detection, duplicate project detection, geographic risk visualization, and human verification in one unified platform.

The system helps identify projects that may require additional administrative scrutiny due to unusual expenditure, progress mismatches, delays, or potential duplication. It supports decision-making but does not automatically establish fraud.

---

#### 3. Problem Statement
Traditional project monitoring depends heavily on static dashboards, spreadsheets, periodic reports, and manual verification. Reviewing a large number of projects makes it difficult to identify unusual patterns consistently.

**Key problems include:**
- **Manual identification:** High administrative overhead in manually spotting unusual projects.
- **Limited multi-parameter analysis:** Difficulty evaluating fiscal progress, physical milestones, and timeline health concurrently.
- **Undetected duplications:** Difficulty identifying potential duplicate projects submitted with altered titles.
- **Delayed risk identification:** Project bottlenecks and deviations identified long after scheduled deadlines.
- **Limited geographic visualization:** Lack of regional spatial views to detect localized risk clusters.
- **Subjective prioritization:** Absence of risk-indexed prioritization for physical verification cases.
- **Data inconsistency:** Incoherent project tracking when separate modules rely on isolated static datasets.

---

#### 4. Solution
CivicShield provides a centralized monitoring and verification workflow. Project data is validated and stored in MySQL. Financial and geographic analytics, rule-based scoring, Isolation Forest, and duplicate detection then identify potential risk indicators.

Flagged projects can be added to an auditable **Verification Queue**, where authorized personnel can assign cases, review documents, upload evidence and site-inspection photographs, record findings, and close or escalate cases.

---

### [ Right Column ]

#### 5. Features
- **Role-Based Dashboards:** Separate, purpose-built views for MP, District Authority, State Nodal Authority, and Ministry users.
- **AI Anomaly Detection:** Isolation Forest algorithm identifying unusual multi-dimensional combinations of numerical project attributes.
- **Rule-Based Risk Scoring:** Deterministic penalty scoring evaluating cost overruns, financial-versus-physical progress mismatches, and delayed status.
- **Duplicate Project Detection:** Algorithmic pairing based on matching district, matching category, and sanctioned amount difference < ₹50,000.
- **Financial Analytics:** Real-time visibility into sanctioned funds, actual expenditure, fund utilization, remaining funds, and cost overruns.
- **Geographic Risk Analytics:** Spatial analytics providing India-, state-, and district-level risk views and comparative rankings.
- **Verification Queue:** Systematic management supporting prioritization, assignment, review, findings recording, closure, and escalation.
- **Verification Evidence:** Secure storage for supporting documents and multiple site-inspection photographs.
- **CSV Data Import:** Strict backend validation engine that screens uploaded project records before importing them into MySQL.
- **AI Insights and Alerts:** Plain-language explanations of risk indicators to help non-technical users understand why a project was flagged.
- **Centralized Data:** MySQL configured as the single source of truth for all project-related services.

---

#### 6. Architecture
CivicShield utilizes a decoupled architecture where all analytics, scoring, and verification services communicate via RESTful APIs against a centralized relational database.

- **Frontend:** React.js for dashboards, tables, filters, charts, geographic views, and verification interfaces.
- **Backend:** Node.js and Express.js for REST APIs, authentication, authorization, data processing, and frontend communication.
- **Database:** MySQL for centralized project records and application data.
- **Machine Learning:** Isolation Forest for unsupervised anomaly detection.
- **Data Import:** Backend validation and CSV-to-MySQL import pipeline.
- **Visualization:** Charts, tables, maps, and risk indicators.

```
[ Project CSV ]
       │
       ▼
[ Pre-Import Validation ]
       │
       ▼
[ MySQL Database (Single Source of Truth) ]
       │
       ├─────────────────────────────────┬─────────────────────────────────┐
       ▼                                 ▼                                 ▼
[ Financial & Geo Analytics ]    [ Risk Engine (Rules + ML) ]    [ Duplicate Detection ]
       │                                 │                                 │
       └─────────────────────────────────┼─────────────────────────────────┘
                                         ▼
                        [ AI Insights & Alerts Engine ]
                                         │
                                         ▼
                            [ Verification Queue ]
                                         │
                                         ▼
                            [ Human Officer Review ]
                                         │
                           ┌─────────────┴─────────────┐
                           ▼                           ▼
                      [ Close Case ]              [ Escalate ]
```

*Note: CSV files are strictly used as import transport media, not as the runtime source of truth. All analytics, machine learning, and verification services strictly query MySQL.*

---

#### 7. Risk Detection Methodology
The CivicShield risk engine blends deterministic policy rules with unsupervised machine learning to calculate a comprehensive risk score (0–100):

- **Cost Overrun (Max 25 points):** Adds proportional points when actual expenditure exceeds the sanctioned amount.
- **Progress Mismatch (Max 20 points):** Compares financial and physical progress. A tolerance threshold of up to 10 percentage points is allowed before points accrue.
- **Delay Risk (18 points):** Adds 18 points when the project status is officially marked as “Delayed.”
- **Isolation Forest:** Evaluates multi-dimensional interactions across sanctioned amount, actual expenditure, physical progress, and financial progress.
- **ML Penalty (20 points):** Adds 20 points when the Isolation Forest model flags an anomaly and the base rule score is below 60.

| Risk Level | Score Range | Administrative Action Protocol |
| :--- | :--- | :--- |
| **Low** | 0 – 30 | Standard periodic review and routine reporting |
| **Medium** | 31 – 60 | Automated desk review and monitoring flag |
| **High** | 61 – 80 | Priority queuing for field inspection |
| **Critical** | 81 and above | Immediate physical verification & fund disbursement hold recommendation |

---

#### 8. Duplicate Detection Criteria
CivicShield marks two project records as a potential duplicate pair when **all three** conditions are met:
1. The **district** is the same.
2. The **category** is the same.
3. The absolute difference between sanctioned amounts is **less than ₹50,000**:
   `|Sanctioned Amount A - Sanctioned Amount B| < ₹50,000`

*Clarification:* Project names and IDs can differ. A detected pair is classified as a *potential duplicate* and must be reviewed by an authorized officer before any administrative action is taken.

---

#### 9. Development Challenges
- **Cross-Module Consistency:** Maintaining synchronized state across dashboards, queues, and analytics.
- **CSV Data Sanitization:** Handling incomplete records, malformed schemas, and duplicate Project IDs during ingestion.
- **Unsupervised Anomaly Detection:** Establishing reliable anomaly baselines without verified historical fraud labels.
- **False-Positive Reduction:** Calibrating risk thresholds to prevent benign project variances from overwhelming field officers.
- **Explainable Risk Scores:** Translating mathematical model outputs into intuitive, non-technical explanations.
- **Realistic Geographic Representation:** Visualizing geographic risk distribution without inventing arbitrary project coordinates.
- **Auditable Verification Trail:** Ensuring every alert corresponds to a traceable human verification action.
- **Evidence Association:** Ensuring site-inspection photographs and documents remain immutably linked to the correct project record.

---

## Lower Section / Page 2: Governance, Impact & Roadmap

### 10. Evaluation Methodology
CivicShield adheres to empirical evaluation standards without inventing synthetic success claims:
- **Controlled Benchmarking:** Evaluated against controlled test benchmark records representing diverse public works patterns (expenditure spikes, delayed delivery, progress divergence).
- **Core Metrics:**
  - Precision, Recall, and F1-score across anomaly identification.
  - False-Positive Rate (FPR) on standard compliant projects.
  - Precision and Recall for duplicate pair candidate matching.
- **Comparative Analysis:** Benchmarking rule-based detection against Isolation Forest and the hybrid CivicShield model.
- *Notice:* Synthetic benchmark records are explicitly cataloged as algorithmic test data, not confirmed historical fraud cases.

---

### 11. Utility and Impact
CivicShield empowers governance stakeholders with tailored decision support:
- **District Authorities:** Systematically prioritize limited field inspection staff on high-risk projects.
- **Members of Parliament (MPs):** Real-time monitoring of fund utilization and on-the-ground progress for recommended works in their constituencies.
- **State Nodal Authorities:** High-level comparative benchmarking across districts to eliminate regional implementation bottlenecks.
- **Ministry Users:** Macro-level monitoring of national fund utilization, risk distributions, and scheme performance indicators.

*CivicShield supports risk screening and evidence-backed decision-making; final determinations remain the exclusive responsibility of authorized administrative officials.*

---

### 12. Future Enhancements
- **Semantic Project Name Matching:** Utilizing NLP and string similarity to detect duplicate works disguised under varied wording.
- **OCR Document Extraction:** Automated text and table extraction from uploaded sanction orders and completion certificates.
- **Computer Vision Image Analysis:** Automated progress verification and quality assessment from site-inspection photographs.
- **Verified Geofencing:** Integration with verified GPS coordinates and GIS mapping layers.
- **Human-in-the-Loop ML Retraining:** Continuous refinement of anomaly detection boundaries based on verified officer findings.
- **Direct Government API Integration:** Secure integration with PFMS, e-GramSwaraj, and state treasury portals.
- **Expanded Enterprise Readiness:** Comprehensive audit trails, hardened RBAC security, and multilingual regional language support.
