import { useClientActions, useClientState } from "@/context/client/index";
import { Form, Input, Button, Typography, message } from "antd";
import { useEffect } from "react";
import { useRouter } from "next/router";

const { Title } = Typography;

const LoginForm = () => {
    const { login } = useClientActions();
    const { isPending, isSuccess, isError } = useClientState();
    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            message.success("Login successful!");
            router.push("/dashboard"); // Redirect after successful login
        } else if (isError) {
            message.error("Login failed. Please try again.");
        }
    }, [isSuccess, isError]);

    const onFinish = (values: { client: string; password: string }) => {
        login(values.client);
    };

    return (
        <div style={{ maxWidth: 400, margin: "auto", padding: "2rem", textAlign: "center" }}>
            <Title level={2}>Client Login</Title>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Username"
                    name="client"
                    rules={[{ required: true, message: "Please enter your username!" }]}
                >
                    <Input placeholder="Enter your username" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please enter your password!" }]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isPending} block>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;