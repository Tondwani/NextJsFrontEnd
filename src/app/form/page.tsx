'use client';

import { Tabs } from 'antd';
import { Provider } from 'react-redux';
import { store } from '@/providers/authProviders'; 
import dynamic from 'next/dynamic';
import '@/styles/form.css';



const TrainerRegister = dynamic(() => import('@/components/auth/Tariner-Reg'));
const ClientLogin = dynamic(() => import('@/components/auth/Client'));
const TrainerLogin = dynamic(() => import('@/components/auth/Trainer-login'));

const FormPage = () => {
  return (
    <Provider store={store}>
      <div className="form-page">
        <div className="form-container">
          <Tabs
            defaultActiveKey="1"
            centered
            items={[
              {
                key: '1',
                label: 'Trainer Register',
                children: <TrainerRegister />,
              },
              {
                key: '2',
                label: 'Client Login',
                children: <ClientLogin />,
              },
              {
                key: '3',
                label: 'Trainer Login',
                children: <TrainerLogin />,
              },
            ]}
          />
        </div>
      </div>
    </Provider>
  );
};

export default FormPage;