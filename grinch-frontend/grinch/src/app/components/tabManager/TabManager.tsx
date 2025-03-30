import { Route, Link } from 'react-router-dom';

import './TabManager.scss';

import React, { useState } from 'react';

interface TabChildProps {
  'data-label': string;
  children: React.ReactNode;
}

interface TabManagerProps {
  children: React.ReactElement<TabChildProps>[];
}

const Tabs: React.FC<TabManagerProps> = ({ children }): React.ReactElement => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<TabChildProps>[];
  const [activeTab, setActiveTab] = useState(
    childrenArray[0]?.props["data-label"]
  );

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {childrenArray.map((child) => {
          const childElement = child as React.ReactElement<{ "data-label": string }>;
          const label = childElement.props["data-label"];

          return (
            <li
              key={label}
              className={label === activeTab ? 'tab-list-item active' : 'tab-list-item'}
              onClick={() => onClickTabItem(label)}
            >
              {label}
            </li>
          );
        })}
      </ol>
      <div className="tab-content">
      {childrenArray.map((child) => {
          const label = child.props['data-label'];

          // Only render the content of the active tab
          return label === activeTab ? <div key={label}>{child.props.children}</div> : null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
