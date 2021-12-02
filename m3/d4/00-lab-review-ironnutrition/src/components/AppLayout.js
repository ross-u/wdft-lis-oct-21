import { PageHeader } from 'antd';

function AppLayout({children}) {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />

      {children}
      {/* 
        props.children represents the content passed
          between the opening and closing tag 
       */}

      
      <footer>
        <hr />
        Yaay
      </footer>
    </div>
    
  );
}

export default AppLayout;