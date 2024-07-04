import express, { Application } from 'express';
import routesProduct from '../routes/product.route';
import routesUser from '../routes/user.route';
import { Product } from './product.model';
import { User } from './user.model';



class Server {

    private app: Application;
    private port: string;

    constructor(){
        //creamos una aplicacion de express
        this.app = express(); 
        this.port = process.env.PORT || "3001";
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log("app corriendo en el puerto " + this.port);
        });
    }

    public routes(){
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);

    }

    //Usar antes que las rutas en el constructor
    public middlewares(){
        //Con esto, cuando enviamos la request podemos ver el body
        this.app.use(express.json()); 

    }

    public async dbConnect() {
        try {
            await Product.sync();
            await User.sync();
            console.log('Database connected');
        } catch (error) {
            console.log('Database no connected ' + error);
        }
    }

}

export default Server;
