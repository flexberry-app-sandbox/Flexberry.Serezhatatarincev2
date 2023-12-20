package Serezhatatarincev2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezhatatarincev2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Оборудование
 */
@Entity(name = "IISSerezhatatarincev2Оборудование")
@Table(schema = "public", name = "Оборудование")
public class Oborudovanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @Column(name = "ИнвНомер")
    private String инвномер;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tip")
    @Convert("Tip")
    @Column(name = "Тип", length = 16, unique = true, nullable = false)
    private UUID _tipid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tip", insertable = false, updatable = false)
    private Tip tip;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Operacii")
    @Convert("Operacii")
    @Column(name = "Операции", length = 16, unique = true, nullable = false)
    private UUID _operaciiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Operacii", insertable = false, updatable = false)
    private Operacii operacii;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Polzovatel")
    @Convert("Polzovatel")
    @Column(name = "Пользователь", length = 16, unique = true, nullable = false)
    private UUID _polzovatelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Polzovatel", insertable = false, updatable = false)
    private Polzovatel polzovatel;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RabocheeMesto")
    @Convert("RabocheeMesto")
    @Column(name = "РабочееМесто", length = 16, unique = true, nullable = false)
    private UUID _rabocheemestoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RabocheeMesto", insertable = false, updatable = false)
    private RabocheeMesto rabocheemesto;


    public Oborudovanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getИнвНомер() {
      return инвномер;
    }

    public void setИнвНомер(String инвномер) {
      this.инвномер = инвномер;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}