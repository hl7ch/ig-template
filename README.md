# ahdis ig template for IG Publisher
this is a very basic fhir implemenation guide template based on from the
[fhir.base.template](https://github.com/HL7/ig-template-base) for the [IG Publisher](https://wiki.hl7.org/IG_Publisher_Documentation)

## Features
* Custom logos (see below)
* History Page 

## Using the ig template

Refer to the IG template in your implementation guide with:
```json
"template": "https://github.com/ahdis/ig-template", 
 ```

* Provide [packages-list.json](https://wiki.hl7.org/index.php?title=FHIR_IG_PackageList_doco) in pages directory

## Examples
* [Swiss FHIR Implemenation Guide Github Template](https://github.com/ahdis/ch-ig)
* [Swiss CH Core Implementation Guide](http://build.fhir.org/ig/hl7ch/ch-core/index.html)

## Note on HL7/FHIR Logos
this template does not use the hl7/fhir logo, however you can include them by providing logo.html and fhirlogo.hml in pages directory and logos in pages/assets/images/, check rules [zulip](https://chat.fhir.org/#narrow/stream/179294-committers.2Fannounce/topic/HL7.20Trademark.20Issues).

