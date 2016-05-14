@Entity
public class Juego {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private String imagen;
    private String nombre;
    private String descripcion;
    private float precio;
    private float valoracion;
    private List<String> tags;
    private List<String> plataforma;
    
    @OneToMany
    private List<Recomendacion> recomendacion;
    private int cantidad;
    
    protected Juego(){}
    
    public Juego(String imagenc, String nombrec, String descripcionc, float precioc, float valoracionc, List<String> tagsc, List<String> plataformac){
        
        this.imagen = imagenc;
        this.nombre = nombrec;
        this.descripcion = descripcionc;
        this.precio = precioc;
        this.valoracion = valoracionc;
        this.tags = tagsc;
        this.plataforma = plataformac;
        this.cantidad = 1;
        this.recomendacion = new ArrayList<>();
        
    }
    
    public addRecomendacion(Recomendacion recom){
        this.recomendacion.add(recom);
    }
    
}