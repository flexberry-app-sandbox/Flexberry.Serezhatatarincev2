package Serezhatatarincev2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezhatatarincev2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: РабочееМесто
 */
@Entity(name = "IISSerezhatatarincev2РабочееМесто")
@Table(schema = "public", name = "РабочееМесто")
public class RabocheeMesto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИнвНомер")
    private String инвномер;

    @Column(name = "Кабинет")
    private String кабинет;

    @Column(name = "Место")
    private String место;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Filial")
    @Convert("Filial")
    @Column(name = "Филиал", length = 16, unique = true, nullable = false)
    private UUID _filialid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Filial", insertable = false, updatable = false)
    private Filial filial;

    @OneToMany(mappedBy = "rabocheemesto", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Oborudovanie> oborudovanies;

    @OneToMany(mappedBy = "rabocheemesto", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<PO> pos;


    public RabocheeMesto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИнвНомер() {
      return инвномер;
    }

    public void setИнвНомер(String инвномер) {
      this.инвномер = инвномер;
    }

    public String getКабинет() {
      return кабинет;
    }

    public void setКабинет(String кабинет) {
      this.кабинет = кабинет;
    }

    public String getМесто() {
      return место;
    }

    public void setМесто(String место) {
      this.место = место;
    }


}