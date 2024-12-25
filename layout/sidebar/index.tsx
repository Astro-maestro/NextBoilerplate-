'use client'
// components/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../../styles/Sidebar.module.css"  // Import styles
import Link from 'next/link';
import { useUserStore } from '@/toolkit/store/store';
import { set } from 'react-hook-form';

const AccordionItem: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', height: "4rem" }}
      >
        <span>{title}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.accordionIcon}
        >
          ▼
        </motion.div>
      </div>
      <motion.div
        className={styles.accordionBody}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden', borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const {token,setToken} = useUserStore();
  useEffect(()=>{
    console.log("indide useeffect")
    setToken('')
  },[])

  return (
    <div className={styles.sidebar} >
      {/* <motion.div 
        className={styles.sidebarHeader} 
        initial={{ x: -300 }} 
        animate={{ x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h2>My Sidebar</h2>
      </motion.div> */}

      {token&&<AccordionItem title="Blogs">
        <ul>
          <Link href="/cms/blogs">
            <li>All Blogs</li></Link>
          <Link href={"/cms/blogs/categories"}>
            <li>Show All Categories</li>
          </Link>
          <Link href="/cms/blogs/latest">
            <li>Latest Blogs</li>
          </Link>
        </ul>
      </AccordionItem>}

      { token && <AccordionItem title="Page Content">
        <ul>
          <Link href={"/cms/services"}><li>Services</li></Link>
          <Link href={"/cms/testimonials"}><li>Testimonials</li></Link>
          <Link href={"/cms/teams"}><li>Our Team</li></Link>
        </ul>
      </AccordionItem>}

      <AccordionItem title="Course">
        <ul>
          <Link href={"/cms/courses"}><li>All Courses</li></Link>
        </ul>
      </AccordionItem>

      <AccordionItem title="CRUD">
        <ul>
          <Link href={"/crud/all_students"}><li>All Students</li></Link>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Sidebar;
