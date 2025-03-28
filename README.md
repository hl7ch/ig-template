# HL7 Switzerland IG template for IG Publisher 

This is a very basic FHIR implementation guide template based on the
[fhir.base.template](https://github.com/HL7/ig-template-base) for the [IG Publisher](https://confluence.hl7.org/display/FHIR/IG+Publisher+Documentation).

## Features
* Custom logos (see [note](#note-on-hl7fhir-logos) below)
* Propose a change link with is routed through Google Forms to GitHub

## Using the IG template

Refer to the IG template in your implementation guide (ig.ini) with:
```
template = ch.fhir.ig.template#current
```

* Provide [packages-list.json](https://wiki.hl7.org/index.php?title=FHIR_IG_PackageList_doco) in www directory

## Examples
* [Swiss FHIR Implementation Guide Github Template](https://github.com/ahdis/ch-ig)
* [Swiss CH Core Implementation Guide](http://build.fhir.org/ig/hl7ch/ch-core/index.html)

## Note on HL7/FHIR Logos
This template does not use the HL7/FHIR logo, however you can include them by providing logo.html and fhirlogo.html in input/includes directory and logos in input/images, check rules on [zulip](https://chat.fhir.org/#narrow/stream/179294-committers.2Fannounce/topic/HL7.20Trademark.20Issues).

## Add a feedback form for your IG

In your IG add (or create) to input/data/features.yml the following properties

```yaml
---
feedback:
    active: true
    formUrl: provide link (see below)
```

1. For the form request a copy of the feedback form https://docs.google.com/forms/d/1sdG-LgSlNaSDJ1HHABEVgmk0etXT-qZd-4bh2iBzUps/edit
2. Don't change the different entries, otherwise they will not be prefilled
3. In the kebab menu select Apps Script (former Script Editor)
4. Adjust handle to GitHub repo organization where the IG lives in
5. Adjust repo to GitHub repo name of the IG
6. In Script Editor to the left select Triggers (clock icon)
7. Add Trigger for Submit Feedback, select Event Type On Form Submit (you need to confirm this with your google account)
8. Back in the form, copy the link form Send form - link and put it in above field


## Google analytics

```yaml
---
analytics:
    active: true
    tagId: G-ED8VLFMEVY
```

## CSS adjustments

```yaml
css:
    navbar: ffffff
    hover: ffffff
    title: ffffff
```

you can change the navigation bar color


