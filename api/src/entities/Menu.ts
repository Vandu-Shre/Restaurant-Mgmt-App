import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class MenuItem {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    menuItem!: string;

    @Column()
    menuItemPrice!: number;

    @Column()
    active: boolean = true;

    @OneToMany(() => OrderItem, orderItem => orderItem.menuItem)
    orderItems!: OrderItem[];
}

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToMany(() => OrderItem, orderItem => orderItem.order)
    orderItems!: OrderItem[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @Column({ type: 'timestamp'})
    placedAt!: Date;

    @Column({ type: 'boolean' })
    status!: Boolean;

    @Column({ type: 'timestamp' })
    paymentTime!: Date;
}

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => MenuItem, menuItem => menuItem.orderItems)
    menuItem!: MenuItem;

    @ManyToOne(() => Order, order => order.orderItems)
    order!: Order;

    @Column()
    quantity!: number;
}

