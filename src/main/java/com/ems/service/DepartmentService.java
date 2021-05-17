package com.ems.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.repository.DepartmentRepository;
import com.ems.entities.Department;
import com.ems.exception.RecordNotFoundException;
 
@Service
public class DepartmentService {
     
    @Autowired
    DepartmentRepository repository;
     
    public List<Department> getAllDepartments()
    {
        List<Department> result = (List<Department>) repository.findAll();
         
        if(result.size() > 0) {
            return result;
        } else {
            return new ArrayList<Department>();
        }
    }
     
    public Department getDepartmentById(Long id) throws RecordNotFoundException 
    {
        Optional<Department> employee = repository.findById(id);
         
        if(employee.isPresent()) {
            return employee.get();
        } else {
            throw new RecordNotFoundException("No employee record exist for given id");
        }
    }
     
    public Department createOrUpdateEmployee(Department entity) 
    {
        if(entity.getDepartmentId()  == null) 
        {
            entity = repository.save(entity);
            Optional<Department> department = repository.findById(entity.getDepartmentId());
            Department newEntity1 = department.get();
            newEntity1.setDepartmentId(entity.getDepartmentId());
            return newEntity1;
        } 
        else
        {
            Optional<Department> department = repository.findById(entity.getDepartmentId());
             
            if(department.isPresent()) 
            {
            	Department newEntity = department.get();
                newEntity.setDepartmentName(entity.getDepartmentName()); 
                newEntity.setDepartmentDesc(entity.getDepartmentDesc());
                newEntity.setDepartmentLoc(entity.getDepartmentLoc());
                newEntity = repository.save(newEntity);
                return newEntity;
            } else {
                entity = repository.save(entity);
                 
                return entity;
            }
        }
    } 
     
    public void deleteDepartmentById(Long id) throws RecordNotFoundException 
    {
        Optional<Department> department = repository.findById(id);
         
        if(department.isPresent()) 
        {
            repository.deleteById(id);
        } else {
            throw new RecordNotFoundException("No employee record exist for given id");
        }
    } 
}