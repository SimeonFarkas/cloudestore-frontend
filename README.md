# CloudStore Frontend

Angular-frontend för CloudStore – en förenklad e-handelsapplikation som integrerar med CloudStores mikrotjänster i AWS.

## Teknikstack

- Angular 17+ (standalone components)
- TypeScript
- Hostad på AWS S3 (static website hosting)

## Funktioner

- Användarregistrering och inloggning
- Produktvisning (via FakeStore API, proxat genom backend)
- Skapa och visa beställningar

## Arkitektur

Fronteneden kommunicerar endast med **ShopUser** (den publika ingångspunkten i CloudStores mikrotjänstarkitektur). ShopUser hanterar internt kommunikation med ProductService.
