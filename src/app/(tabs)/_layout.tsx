import React from 'react';
import CurvedTabs from '../../components/tabs/CurvedTabs';
import DefaultTabs from '../../components/tabs/DefaultTabs';

export default function TabLayout() {
  const showCurvedTab = false; // <--- CHANGE THIS (dynamic based on your need later)

  return showCurvedTab ? <CurvedTabs /> : <DefaultTabs />;
}
