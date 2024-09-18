import { Column, DeleteDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("locations")
export class Location {
@PrimaryColumn({unique:true})
pincode  :Number;

@Column()
city:String;

@Column()
state:String;

@Column()
country:String;

@DeleteDateColumn()  // This column will store the timestamp of deletion
deletedAt?: Date;
}
