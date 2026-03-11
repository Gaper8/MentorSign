
**Nom projet :** MentorSign
**Date de début :** 02/03/2026
Taux réelle de disponibilité : J'ai un rythme d'alternance de 2 semaines en entreprise/1 semaine en cours. Pendant mes semaines en entreprise, soit 35h sur 5 jours, je peux passer en moyenne 15h à 20h par semaine sur cette mission (répartition selon les autres missions et interventions). Sur mes semaines de cours, j'estime qu'en dehors de mes cours je peux passer en moyenne 10h par semaine sur le projet.

Ce qui porte le temps passé sur le projet à : 17 h + 17 h + 10 h = 44h sur 3 semaines en moyenne.

**Expérience vécue  :** Cette estimation est basée sur mon rythme habituel pour réaliser ce type de fonctionnalités (CRUD, authentification, API, base de donnée, front end, back end) et sur l’expérience de projets précédents. 
Ses estimations seront ajustées au fil des sprints via les comptes-rendus d’activités et la mise à jour du planning. 
**Anticipation :** J'ai pris en compte une marge dédiée à la correction, aux retours et à l’ajustement des spécifications.


```mermaid
gantt
dateFormat  YYYY-MM-DD
axisFormat  %d/%m
title Planning previsionnel- Projet MentorSign

section sprint 1 - Analyse
Recueil des besoins :a1, 2026-03-02, 5d
Procedures utilisateur :a1b, after a1, 3d
Conformite procedures (process entreprise) :a1c, after a1b, 2d
Specifications fonctionnelles :a2, after a1c, 5d
Reingenierie processus :a2b, after a2, 3d
Schema circulation des documents :a2c, after a2b, 2d
Validation perimetre MVP :a3, after a2c, 4d

section sprint 2 - Conception
Modelisation BDD :b1, 2026-03-16, 7d
Contraintes integrite + triggers automatique :b1b, after b1, 3d
Architecture logicielle en couches (schema) :b4, 2026-03-18, 5d
Registre risques + criticite :b5, 2026-03-18, 2d
Maquettes (web+mobile) :b2, 2026-03-20, 5d
Accessibilite UI (norme presentation + adaptation) :b2b, after b2, 2d
Setup environnement technique :b3, 2026-03-20, 5d
Env tests multi-tiers (docker/shell) :b3b, after b3, 4d
Conception QR dynamique (token, expiration, nv qr) :b6, 2026-03-24, 3d
Dictionnaire donnees (champs, provenance) :b7, 2026-03-26, 3d
RGPD (minimisation + temps stockage logs) :b8, 2026-03-26, 2d

section sprint 3 - Developpement MVP
Authentification :c1, 2026-03-30, 7d
Roles de base (mentor/referent/admin) :c1b, after c1, 2d
CRUD Mentors :c2, after c1b, 6d
Gestion des heures :c3, after c2, 10d
App web (affichage QR dynamique) :c4a, after c3, 5d
App mobile (scan QR + envoi validation) :c4b, 2026-04-10, 8d
Validation QR cote API + signature :c4c, after c4a, 5d
log (evenement, qui a fait quoi) :c7, 2026-04-10, 8d
Export donnees (PDF/CSV) :c5, after c4c, 5d
Doc sur l'export (format + champs) :c5b, after c5, 2d
Documentation technique (API, DB, archi) :c8, 2026-04-14, 6d
Jeux essai + tests unitaires (MVP) :c6, 2026-04-10, 10d
MVP Livre :milestone, 2026-04-30, 0d

section sprint 4 - Stabilisation
Gestion des roles (durcissement) :d1, 2026-05-01, 7d
Historique (consultation logs) :d2, after d1, 5d
Regles anti-triche (detections anomalies) :d2c, after d2, 4d
Securite acces donnees (controle acces) :d2b, after d2c, 5d
Estimation charge utilisateurs :d3a, 2026-05-06, 2d
Optimisation UX :d3, after d2b, 5d
Tests corrections (non regression, fonctionne apres ajout) :d4, after d3, 7d
Deploiement en env de test + checklist ok :d5, after d4, 2d
Validation avec referent (PV ou CR) :d6, after d5, 2d
Version stabilisee :milestone, 2026-06-01, 0d
```

