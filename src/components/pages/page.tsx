"use client"
import { Tabs } from "antd"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { setActiveTab } from "@/redux/ui/actions"
import TrainerRegister from "@/components/auth/trainer-register"
import ClientLogin from "@/components/auth/client-login"
import TrainerLogin from "@/components/auth/trainer-login"

export default function Home() {
  const dispatch = useDispatch()
  const { activeTab } = useSelector((state: RootState) => state.ui)

  const handleTabChange = (key: string) => {
    dispatch(setActiveTab(key))
  }

  const items = [
    {
      key: "1",
      label: "Trainer Register",
      children: <TrainerRegister />,
    },
    {
      key: "2",
      label: "Client Login",
      children: <ClientLogin />,
    },
    {
      key: "3",
      label: "Trainer Login",
      children: <TrainerLogin />,
    },
  ]

  return (
    <main className="main-container">
      <div className="form-container">
        <h1 className="title">Learning Platform</h1>
        <Tabs activeKey={activeTab} onChange={handleTabChange} items={items} className="auth-tabs" />
      </div>
      <style jsx>{`
        .main-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: purple;
          color: rgb(255, 0, 0);
          padding: 2rem 0;
        }
        .form-container {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .title {
          text-align: center;
          margin-bottom: 1.5rem;
          color: rgb(255, 0, 0);
        }
        :global(.auth-tabs .ant-tabs-nav) {
          margin-bottom: 20px;
        }
      `}</style>
    </main>
  )
}

