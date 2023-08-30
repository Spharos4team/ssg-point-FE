export default function ColValue ({
    width,
    classname,
}:{
    width:string;
    classname?: string;
}){
    return(
        <col width={width} className={classname}/>
    );
};