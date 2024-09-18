import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationsService {
  constructor(@InjectRepository(Location) private repo:Repository<Location>){}
  create(createLocationDto: CreateLocationDto) {
    // return 'This action adds a new location';
    const location= new Location;
    const {pincode,city,state,country}=createLocationDto
    location.pincode=pincode;
    location.city=city;
    location.state=state;
    location.country=country;
    this.repo.create(location);
    return this.repo.save(location);
  }

  async findAll() {
    // return `This action returns all locations`;
    return await this.repo.find();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} location`;
    return await this.repo.findOneBy({pincode:id})
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    // return `This action updates a #${id} location`;
    const location= new Location;
    const {pincode,city,state,country}=updateLocationDto;
    location.pincode=pincode;
    location.city=city;
    location.state=state;
    location.country=country;
    await this.repo.update(id,location);
    return  this.repo.findOneBy({pincode :id});
  }

  async remove(id: number) {
    // return `This action removes a #${id} location`;
    return await this.repo.softDelete(id)
  }
}
