import { useState } from "react";
import "./SignupPage.css";

interface SignupForm {
    name: string;
    email: string;
    password: string;
    confirm: string;
}

function SignupPage() {
    const [form, setForm] = useState<SignupForm>({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSignup(e: React.FormEvent) {
        e.preventDefault();

        if (form.password !== form.confirm) {
            alert("Lozinke se ne poklapaju");
            return;
        }

        console.log("Signup:", form);
    }

    return (
        <div className="signup-wrapper">
            <div className="signup-card">
                <h1 className="signup-title">Let's get Cookin'</h1>

                <form onSubmit={handleSignup}>
                    <div className="signup-input">
                        <label>Name </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="signup-input">
                        <label>Email </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="signup-input">
                        <label>Password </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="signup-input">
                        <label>Confirm Password </label>
                        <input
                            type="password"
                            name="confirm"
                            value={form.confirm}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="signup-btn">Let Me Cook</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
