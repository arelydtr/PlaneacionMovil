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

GitHub es una plataforma de desarrollo que utiliza Git, un sistema de control de versiones distribuido, para gestionar el código fuente y colaborar en proyectos.

1.	Ramas (Branches):
o	Rama Principal (main/master): La rama principal contiene el código estable y listo para producción.
o	Ramas de Desarrollo (feature branches): Se crean ramas específicas para el desarrollo de nuevas funcionalidades o corrección de errores. Estas ramas se fusionan con la rama principal cuando están completas.

3.	Commits y Mensajes de Commit:
o	Commits: Cada cambio realizado en el código se guarda en un commit. Los commits deben tener mensajes claros que describan las modificaciones realizadas.
o	Mensajes de Commit: Se recomienda utilizar mensajes descriptivos y concisos para facilitar la comprensión del historial de cambios.

4.	Pull Requests:
o	Revisión de Código: Las pull requests se utilizan para revisar y discutir los cambios antes de fusionarlos con la rama principal. Permiten la colaboración y la revisión del código por parte de otros miembros del equipo.

5.	Versiones y Etiquetas (Tags):
o	Etiquetas (Tags): Se utilizan para marcar versiones específicas del software en el repositorio. Las etiquetas ayudan a identificar versiones estables y permiten realizar un seguimiento de los lanzamientos.

6.	Integración Continua (CI) y Entrega Continua (CD):
o	Automatización: Configura pipelines de CI/CD en GitHub Actions para automatizar el proceso de construcción, pruebas y despliegue del software.

7.	Gestión de Issues y Proyectos:
o	Issues: Utiliza issues para rastrear errores, tareas y mejoras. Permite la gestión y priorización del trabajo pendiente.
o	Proyectos: Organiza y planifica el trabajo en proyectos para mantener un flujo de trabajo ordenado y eficiente.


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
