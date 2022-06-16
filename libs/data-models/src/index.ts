import {config} from "dotenv"
import path from "path"

const configFile = path.join(__dirname, `.env`);

config({ debug: true, path: configFile })

const hello = ()=>{
    console.log(process.env.GREETING_HELLO);
}

const world = ()=>{
    console.log(process.env.GREETING_WORLD);
}

export default {hello, world};
