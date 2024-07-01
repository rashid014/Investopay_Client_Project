"use client"
import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import image from './yourImage1.jpg';
import './Writings1.css'; // Import CSS file for animations
import Image from 'next/image';

interface Writings1Props {}

const Writings1: React.FC<Writings1Props> = () => {
  return (
    <Row gutter={[16, 16]} justify="center" align="middle" style={{ minHeight: '100vh', padding: '0 20px' }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <div style={{ maxHeight: '100%', maxWidth: '100%', height: '100%' }}>
          <Card style={{ height: '100%', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Typography.Title level={2} style={{ marginBottom: '24px', textAlign: 'center' }}>WELCOME TO INVESTOPAY</Typography.Title>
            <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'center' }}>
              Your destination for seamless banking services connecting customers and banks. Explore our user-friendly platform offering a range of communication channels and personalized support.
            </Typography.Paragraph>
            <div style={{ marginTop: '40px' }}>
              <Typography.Title level={3} style={{ marginBottom: '16px' }}>Here&apos;s what INVESTOPAY offers:</Typography.Title>
              <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ marginRight: '8px', color: '#52c41a' }} /> <b>Transparent Communication:</b> Direct interaction for efficient issue resolution.</li>
                <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ marginRight: '8px', color: '#52c41a' }} /><b> Customer Benefits:</b> Save time, access expert advice, and enjoy convenience.</li>
                <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ marginRight: '8px', color: '#52c41a' }} /><b> Partnership Opportunities:</b> Banks can extend reach and enhance engagement.</li>
                <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ marginRight: '8px', color: '#52c41a' }} /><b>Branch Accessibility:</b> Convenient physical branch access</li>
                <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ marginRight: '8px', color: '#52c41a' }} /><b>Paper Documentation:</b> Traditional paper-based records.</li>
                <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ marginRight: '8px', color: '#52c41a' }} /><b>In-Person Consultations:</b> Face-to-face advisory services for personalized guidance.</li>
              </ul>
            </div>
          </Card>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={image} alt="Your Image" style={{ maxHeight: '100%', maxWidth: '100%', height: '100%' }} />
      </Col>
    </Row>
  );
};

export default Writings1;
