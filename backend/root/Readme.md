Pentru testare:
1. Clonati repositorul si rulati RootApplication.java(Shift+F10)
2. Endpoint-ul e http://localhost:8080/api/v1/demo-controller (asta e pagina la care trebuie sa ajungeti)
3. Mecanismele ce trebuie testate sunt:
REGISTER: http://localhost:8080/api/v1/auth/register
LOGIN: http://localhost:8080/api/v1/auth/authenticate
(astea le bagati in Postman)
4. FOARTE IMPORTANT! In Postman, asigurati-va ca faceti un POST request la API

mai multe informatii aveti aici:
https://www.youtube.com/watch?v=KxqlJblhzfI (skip to: 1:59:00)

Proiectul are integrat SWAGGER, folositi ca endpoint http://localhost:8080/swagger-ui/index.html pentru documentatie la API

**Trebuie sa aveti postgreSQL instalat, modificati in src/main/resources/application.properties password-ul dupa cum aveti voi la master
(de obicei e 1111, piatraneamt1 sau postgres, depinde voi ce v-ati pus)