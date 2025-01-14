package Medione.controller;

import Medione.pojo.Location;
import Medione.service.ILocationService;
import Medione.service.IMedicineService;
import Medione.utils.RLocation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @ClassName LocationController
 * @Description API regarding location define here
 **/
//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/location")
public class LocationController {
    @Autowired
    private ILocationService service;
    @Autowired
    private IMedicineService medicineService;

    @PutMapping
    public RLocation update(@RequestBody Location location){
        Boolean flag = service.modifyLocation(location);
        if(flag){
            return new RLocation(200);
        }else{
            return new RLocation(404);
        }

    }

    @DeleteMapping("/{locationid}")
    public RLocation delete(@PathVariable Integer locationid){
        medicineService.changeLocation(locationid);
        Boolean flag  = service.deleteLocation(locationid);
        if(flag){
            return new RLocation(200);
        }else{
            return new RLocation(404);
        }
    }

    @GetMapping("/{locationid}")
    public RLocation getByLocationId(@PathVariable Integer locationid){
        Location location = service.getLocation(locationid);
        if(location != null){
            return new RLocation(200,location,"success!");
        }else {
            return new RLocation(404,null,"failed found location.");
        }
    }

    @PostMapping
    public RLocation create(@RequestBody Location location){
        return new RLocation(200,service.saveLocation(location));
    }

}
