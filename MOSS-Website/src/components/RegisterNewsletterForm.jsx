import { useState, useEffect } from "react";
import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function RegisterNewsletterForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [formValidation, setFormValidation] = useState(false);

    // Run validation every time formData changes
    useEffect(() => {
        validateForm();
    }, [formData]);

    function validateForm() {
        const isValid = formData.firstName.length > 0 &&
                        formData.lastName.length > 0 &&
                        formData.email.length > 0;
        setFormValidation(isValid);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <Card className="p-4 shadow-lg bg-5 bg-opacity-30 text-white max-w-sm mx-auto mb-2">
            <Typography variant="h6" className="text-center mb-2">
                Tilmeld dig vores nyhedsbrev!
            </Typography>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                <Input
                    size="md"
                    label="Fornavn"
                    placeholder="Indtast fornavn"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <Input
                    size="md"
                    label="Efternavn"
                    placeholder="Indtast efternavn"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <Input
                    size="md"
                    label="Email"
                    placeholder="Indtast email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                />
                <Button
                    type="submit"
                    color="blue"
                    disabled={!formValidation}
                    onClick={handleSubmit}
                    fullWidth
                    className="mt-3"
                >
                    Tilmeld nyhedsbrev
                </Button>
            </form>
        </Card>
    );
}
