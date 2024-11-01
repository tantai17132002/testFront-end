export default function Footer() {
    return (
      <footer className="footer bg-dark text-white text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Giới thiệu</h5>
              <p>Memdover là nơi cung cấp các căn hộ chất lượng cao...</p>
            </div>
            <div className="col-md-4">
              <h5>Liên hệ</h5>
              <p>Email: tntt@google.com</p>
              <p>Điện thoại: 0923943291</p>
            </div>
            <div className="col-md-4">
              <h5>Theo dõi chúng tôi</h5>
              <a href="#" className="text-white"><i className="ti-facebook"></i></a>
            </div>
          </div>
          <div className="mt-3">
            <p>&copy; 2024 Memdover. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  