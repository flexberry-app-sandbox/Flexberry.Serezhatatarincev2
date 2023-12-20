package Serezhatatarincev2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezhatatarincev2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПО
 */
@Entity(name = "IISSerezhatatarincev2ПО")
@Table(schema = "public", name = "ПО")
public class PO {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @Column(name = "Версия")
    private String версия;

    @Column(name = "Freeware")
    private Boolean freeware;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vendor")
    @Convert("Vendor")
    @Column(name = "Вендор", length = 16, unique = true, nullable = false)
    private UUID _vendorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vendor", insertable = false, updatable = false)
    private Vendor vendor;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RabocheeMesto")
    @Convert("RabocheeMesto")
    @Column(name = "РабочееМесто", length = 16, unique = true, nullable = false)
    private UUID _rabocheemestoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RabocheeMesto", insertable = false, updatable = false)
    private RabocheeMesto rabocheemesto;


    public PO() {
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

    public String getВерсия() {
      return версия;
    }

    public void setВерсия(String версия) {
      this.версия = версия;
    }

    public Boolean getFreeware() {
      return freeware;
    }

    public void setFreeware(Boolean freeware) {
      this.freeware = freeware;
    }


}