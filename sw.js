self.addEventListener("install", (event) => {
    console.info("Service Worker instalado ESPE");
    const wu= new Promise ((resolve) => {
        try {
            setTimeout(() => {
            const addFiles = "";
            console.log("Service Worker instalado correctamente");
            resolve();
        },1000);
        self.skipWaiting();
    }catch(error) {
        reject(error);
    }
    });
    event.waitUntil(wu);
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activado ESPE");
    event.waitUntil(clients.claim());
});
self.addEventListener("fetch", (event) => {
    console.log("Servicio worker recibiendo la petición");
    });


    @Entity
public class Libro {
  @Id
  private Long id;

  private String titulo;

  @ManyToOne
  @JoinColumn(name = "autor_id")
  private Autor autor;

  @ManyToMany
  @JoinTable(
    name = "libro_categoria",
    joinColumns = @JoinColumn(name = "libro_id"),
    inverseJoinColumns = @JoinColumn(name = "categoria_id"))
  private Set<Categoria> categorias;

  @OneToMany(mappedBy = "libro")
  private List<Prestamo> prestamos;
  // getters y setters
}
