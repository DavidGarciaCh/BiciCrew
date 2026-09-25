# BiciCrew — Mobile

App móvil construida con React Native. Consumirá la misma API expuesta en `../backend`.

## Importante — cómo integrar estos archivos

Un proyecto React Native no se puede entregar como simples archivos sueltos: necesita carpetas nativas (`android/`, `ios/`) que se generan con la CLI oficial en tu máquina, ya que dependen del sistema operativo y de las herramientas de compilación instaladas (Android Studio / Xcode). Por eso el flujo correcto es:

1. Inicializar el proyecto en tu máquina:
   ```
   npx react-native@latest init BiciCrewMobile
   ```
2. Reemplazar los archivos generados `App.js`, `index.js` y `app.json` por los que están en esta carpeta (contienen el "Hola Mundo" de prueba).
3. Copiar el `package.json` de aquí como referencia de las dependencias del proyecto, o simplemente agregar las que falten al `package.json` que generó la CLI.
4. Ejecutar:
   ```
   npx react-native run-android
   ```
   (o `run-ios` si vas a compilar para iOS).

## Requisitos
- Node.js 18+
- Android Studio (con un emulador configurado) y/o Xcode, según la plataforma objetivo.
