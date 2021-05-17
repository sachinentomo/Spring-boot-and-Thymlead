package com.ems.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

@Entity
@Table(name = "department")
public class Department implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "departmentId")
    private Long departmentId;

    @Column(name = "departmentName")
    private String departmentName;

    @Column(name = "departmentDesc")
    private String departmentDesc;

    @Column(name = "departmentLoc")
    private String departmentLoc;

    @Column(name="isDelete", columnDefinition="tinyint(1) default 0")
    private boolean isDelete;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Transient
    private List<Employee> employeeList;

    public Department() {

    }

    public Department(String departmentName, String departmentDesc, String departmentLoc) {
        this.departmentName = departmentName;
        this.departmentDesc = departmentDesc;
        this.departmentLoc = departmentLoc;
    }

    public Department(Long departmentId, String departmentName, String departmentDesc, String departmentLoc) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.departmentDesc = departmentDesc;
        this.departmentLoc = departmentLoc;
    }

	public Long getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getDepartmentDesc() {
		return departmentDesc;
	}

	public void setDepartmentDesc(String departmentDesc) {
		this.departmentDesc = departmentDesc;
	}

	public String getDepartmentLoc() {
		return departmentLoc;
	}

	public void setDepartmentLoc(String departmentLoc) {
		this.departmentLoc = departmentLoc;
	}

	@Override
	public String toString() {
		return "Department [departmentId=" + departmentId + ", departmentName=" + departmentName + ", departmentDesc="
				+ departmentDesc + ", departmentLoc=" + departmentLoc + "]";
	}
	@Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Department)) {
            return false;
        }
        Department other = (Department) object;
        if ((this.departmentId == null && other.departmentId != null) || (this.departmentId != null && !this.departmentId.equals(other.departmentId))) {
            return false;
        }
        return true;
    }

}