import { useState } from "react";

const FormWithUseFormStatus = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    terms: false,
  });

  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 18) {
      newErrors.age = "You must be at least 18 years old";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitSuccess(false);
    setErrors({});

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsPending(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      setSubmitSuccess(true);

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        terms: false,
      });
    } catch (error) {
      setErrors({ submit: "Submission failed. Please try again." });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: "20px", color: "#667eea" }}>
        Form with useFormStatus Pattern
      </h3>

      {submitSuccess && (
        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            borderRadius: "5px",
            marginBottom: "20px",
            color: "#155724",
          }}
        >
          ✅ Registration successful!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f9f9f9",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        {/* Username */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={isPending}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: errors.username ? "2px solid #f44336" : "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: isPending ? "#f5f5f5" : "white",
            }}
          />
          {errors.username && (
            <p style={{ color: "#f44336", fontSize: "14px", marginTop: "5px" }}>
              {errors.username}
            </p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isPending}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: errors.email ? "2px solid #f44336" : "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: isPending ? "#f5f5f5" : "white",
            }}
          />
          {errors.email && (
            <p style={{ color: "#f44336", fontSize: "14px", marginTop: "5px" }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={isPending}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: errors.password ? "2px solid #f44336" : "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: isPending ? "#f5f5f5" : "white",
            }}
          />
          {errors.password && (
            <p style={{ color: "#f44336", fontSize: "14px", marginTop: "5px" }}>
              {errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={isPending}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: errors.confirmPassword
                ? "2px solid #f44336"
                : "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: isPending ? "#f5f5f5" : "white",
            }}
          />
          {errors.confirmPassword && (
            <p style={{ color: "#f44336", fontSize: "14px", marginTop: "5px" }}>
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Age */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Age:
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            disabled={isPending}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: errors.age ? "2px solid #f44336" : "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: isPending ? "#f5f5f5" : "white",
            }}
          />
          {errors.age && (
            <p style={{ color: "#f44336", fontSize: "14px", marginTop: "5px" }}>
              {errors.age}
            </p>
          )}
        </div>

        {/* Terms */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              disabled={isPending}
              style={{ width: "20px", height: "20px" }}
            />
            <span>I agree to terms and conditions</span>
          </label>
          {errors.terms && (
            <p style={{ color: "#f44336", fontSize: "14px", marginTop: "5px" }}>
              {errors.terms}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: isPending ? "#ccc" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: isPending ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          {isPending ? "Submitting..." : "Register"}
        </button>

        {errors.submit && (
          <p
            style={{
              color: "#f44336",
              fontSize: "14px",
              marginTop: "15px",
              textAlign: "center",
            }}
          >
            {errors.submit}
          </p>
        )}
      </form>
    </div>
  );
};

export default FormWithUseFormStatus;
