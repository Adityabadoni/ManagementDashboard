
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';


export default function TableWithImg() {
   const  data = [
    {
        sno:"1",
        name : "Oppo",
        image : "./images/product7.jpg"
    },
    {
        sno:"2",
        name : "Redmi",
        image : "./images/product24.jpg"
    },
    {
        sno:"3",
        name : "Samsung",
        image : "./images/product23.jpg"
    },
    
]
    const [products, setProducts] = useState([]);

   

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            {/* <Button icon="pi pi-refresh" rounded raised /> */}
        </div>
    );
    // const footer = `In total there are ${products ? products.length : 0} products.`;
    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.image} alt={rowData.name} style={{ width: '50px' }} />;
    };

    return (
        <div className="card">
            <DataTable value={data} header={header} footer={``} tableStyle={{ minWidth: '30rem' }}>
            <Column field="sno" header="Sno"></Column>
                <Column field="name" header="Name"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        