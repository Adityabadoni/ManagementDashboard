
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function Toast() {
    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button label="Success" severity="success" onClick={showSuccess} />
                <Button label="Info" severity="info" onClick={showInfo} />
                <Button label="Warn" severity="warning" onClick={showWarn} />
                <Button label="Error" severity="danger" onClick={showError} />
                <Button label="Secondary" severity="secondary" onClick={showSecondary} />
                <Button label="Contrast" severity="contrast" onClick={showContrast} />
            </div>
        </div>
    )
}
        