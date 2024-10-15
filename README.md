<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# PlaneacionMovil
Planeación del proceso de desarrollo de software
I.	METODOLOGIA

Metodología  XP (Extreme Programming)
La programación extrema (XP) es una metodología ágil de gestión de proyectos que se centra en la velocidad y la simplicidad con ciclos de desarrollo cortos. Esta metodología se basa en 5 valores, 5 reglas y 12 prácticas de programación. Si bien tiene una estructura rígida, el resultado de estos sprints altamente centrados y las integraciones continuas buscan dar como resultado un producto de mayor calidad.
La elección de la Metodología XP (Programación Extrema) se basa en una serie de razones sólidas que la hacen apropiada para abordar una amplia variedad de proyectos y entornos. 
Flexibilidad y Adaptabilidad: XP es conocida por su flexibilidad, lo que la hace adecuada para proyectos donde los requisitos pueden cambiar con el tiempo. La metodología permite a los equipos responder de manera ágil a las necesidades cambiantes del cliente, lo que es especialmente valioso en entornos de desarrollo de software y proyectos de innovación.
Orientación a las Personas: Pone un fuerte énfasis en la colaboración, la comunicación y el trabajo en equipo. La metodología promueve la interacción constante entre desarrolladores, clientes y otros stakeholders, lo que mejora la comprensión de los requisitos y garantiza la satisfacción del cliente.

Calidad del Software: Incorpora prácticas que se centran en la calidad del software, como pruebas continuas, revisión de código y refactorización. Esto conduce a la entrega de software más confiable y de mayor calidad.

Ritmo de Entrega: Fomenta la entrega frecuente de software funcional. Esto permite a los clientes obtener valor rápidamente y proporciona la oportunidad de obtener retroalimentación temprana, lo que puede mejorar la toma de decisiones.

Gestión de Riesgos: Aborda la gestión de riesgos al incorporar prácticas como la planificación incremental y la adaptación a medida que se aprende más sobre el proyecto. Esto ayuda a mitigar los riesgos y a tomar decisiones informadas.

Comunicación Efectiva: La comunicación constante y las prácticas de revisión en XP mejoran la comprensión y reducen malentendidos entre los miembros del equipo y los clientes, lo que lleva a una mayor eficiencia y menos errores.

Crecimiento Profesional: ´Promueve el aprendizaje continuo y el desarrollo profesional de los miembros del equipo. Esto conduce a equipos altamente competentes y motivados.

Satisfacción del Cliente: La orientación de XP hacia la satisfacción del cliente y la entrega de valor aporta un alto nivel de satisfacción y fidelidad del cliente.

Adopción de las Mejores Prácticas de Desarrollo Ágil: Es una metodología ágil que se basa en principios ágiles fundamentales, como la entrega temprana y continua de software y la adaptación a cambios. 


II. ESQUEMA DE VERSIONAMIENTO

1. Selección de Estrategia de Versionamiento (GitFlow):
La estrategia de GitFlow es adecuada ya que proporciona un flujo de trabajo claro, estructurado y flexible para el desarrollo colaborativo y la gestión de lanzamientos. GitFlow permite manejar versiones de producción estables mientras se desarrollan nuevas funcionalidades y se preparan lanzamientos de manera ordenada.

2. Definición de pasos para la creación, revisión y fusión de ramas:

Creación de ramas
Feature branches: Creadas desde develop para cada nueva funcionalidad.

Release branches: Creadas desde develop cuando todo el desarrollo de la versión está listo para ser probado y ajustado.

Hotfix branches: Creadas desde master para corregir errores críticos en producción.

Revisión y pruebas:
Antes de fusionar cualquier feature branch a develop, el código debe pasar por una revisión (code review) y pruebas automatizadas para asegurar su calidad.
La release branch también debe pasar pruebas rigurosas antes de fusionarse en master para lanzar una nueva versión.

Fusión de ramas:
Una vez que se completan las pruebas, las feature branches se fusionan en develop.
Las release branches se fusionan tanto en master (para lanzar la versión) como en develop (para incluir los ajustes en el flujo de desarrollo).
Las hotfix branches se fusionan en master y develop para corregir problemas críticos.

3. Integración continua (CI):
GitFlow es compatible con la integración continua (CI). Cada vez que se fusione una rama (ya sea feature, release o hotfix), los sistemas de CI como Jenkins, TravisCI, o GitHub Actions ejecuten automáticamente:

Compilación: Verificar que el código pueda ser compilado correctamente.

Pruebas automatizadas: Ejecutar las pruebas unitarias, de integración y funcionales para asegurar que no se introducen errores.

Despliegue: Implementar el código en entornos de prueba o producción según corresponda (esto suele ocurrir cuando se fusiona en master).


III. FLUJO DE HERRAMIENTA DE CONTROL DE VERSIONES SELECCIONADA Y EL FLUJO DE TRABAJO

Clonar el repositorio:Esto se hace usando el comando git clone <url-del-repositorio>.

Crear una rama: En un buen flujo de trabajo, es común que los desarrolladores creen una nueva rama para trabajar en una característica o corrección de errores. Esto se hace con git checkout -b nombre-rama.

Realizar cambios y commit: Guardar en en Git mediante un commit con el comando git commit -m "Descripción del cambio". Los commits son "puntos de control" que permiten revertir o ver el historial de cambios.

Sincronización con el repositorio remoto:

Pull: Antes de subir tus cambios, es recomendable sincronizar tu repositorio local con los cambios que otros miembros del equipo puedan haber hecho, usando git pull origin main (si trabajas en la rama principal).

Push: Una vez que tus cambios están listos, los subes al servidor remoto con el comando git push origin nombre-rama.

Pull request (PR): En la mayoría de los proyectos colaborativos, los cambios no se integran directamente en la rama principal, sino que se crea una pull request (PR). Otros desarrolladores revisan tu código antes de fusionarlo. Esto asegura que los cambios no rompan el proyecto.

Merge: Si el PR es aprobado, se hace un merge (fusión) de la rama que creaste a la rama principal del proyecto (generalmente main o master).


6.  FLUJO DE HERRAMIENTA SELECCION DE ESTRATEGIA DE DESPLIEGUE
   
Canary Deployment: Esta estrategia puede ser muy efectiva para una aplicación móvil, ya que permite liberar actualizaciones a un grupo pequeño de usuarios antes de un despliegue completo. Esto es útil para detectar problemas potenciales en un entorno de producción sin afectar a todos los usuarios.

 Entornos
Desarrollo (Development): Este entorno es donde los desarrolladores implementan nuevas funcionalidades y realizan pruebas iniciales. Para una aplicación móvil, esto incluye pruebas en emuladores y dispositivos físicos.

Preproducción (Staging): Un entorno que replica el entorno de producción, donde se realizan pruebas finales antes del lanzamiento. Aquí puedes simular la experiencia del usuario final con datos reales (pero no sensibles).

Producción (Production): Es el entorno donde la aplicación está disponible para los usuarios finales. En este caso, asegúrate de que la aplicación móvil esté correctamente desplegada en las tiendas de aplicaciones (App Store y Google Play) y que esté monitoreada para cualquier problema.
>>>>>>> b8184038df49d62d395b95bf8e291bfe7d44e462
