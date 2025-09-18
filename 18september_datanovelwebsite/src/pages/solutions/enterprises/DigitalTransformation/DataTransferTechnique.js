import React from 'react';
import './DataTransferTechnique.css';
import datatransfer1 from '../../../../assets/images/datatransfer1.png';
import datatransfer7 from '../../../../assets/images/datatransfer7.png';
import datatransfer3 from '../../../../assets/images/datatransfer3.png';
import datatransfer4 from '../../../../assets/images/datatransfer4.png';
import datatransfer5 from '../../../../assets/images/datatransfer5.png';
import datatransfer6 from '../../../../assets/images/datatransfer6.png';

const DataTransferTechnique = () => {
    const captions = [
        'Smoothing',
        'Normalization',
        'Aggregation',
        'Discretization',
        'Attribute constribution',
        'Transformation'
    ];

    const images = [
        datatransfer1,
        datatransfer7,
        datatransfer3,
        datatransfer4,
        datatransfer5,
        datatransfer6,
    ];

    return (
        <section className="data-transfer-technique">
            <h2 className="data-transfer-technique__title">Data Transformation Techniques</h2>
            <div className="data-transfer-technique__images">
                {images.map((src, index) => (
                    <div key={index} className="data-transfer-technique__item">
                        <img src={src} alt={`${captions[index]} Technique`} />
                        <h4 className="data-transfer-technique__caption">{captions[index]}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DataTransferTechnique;
