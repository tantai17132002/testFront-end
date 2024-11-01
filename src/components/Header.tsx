import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="top-header d-flex justify-content-between">
        <div className="auth-actions">
          <Link href="/login">Đăng nhập</Link>
          <Link href="">Đăng ký</Link>
        </div>
        <div className="shop-actions">
          <Link href="#"><i className="ti-zoom-in"></i></Link>
          <Link href="#"><i className="ti-shopping-cart"></i> Giỏ hàng: (0) sản phẩm</Link>
        </div>
      </div>
      <div className="main-header d-flex justify-content-between align-items-center">
        <Link href="/">
          <Image src="/assets/images/logo.png" alt="Logo" className="logo" />
        </Link>
        <nav>
          <ul className="nav-list d-flex">
            <li><Link href="/">TRANG CHỦ</Link></li>
            <li><Link href="/about">GIỚI THIỆU</Link></li>
            <li><Link href="/products">SẢN PHẨM</Link></li>
            <li><Link href="/news">TIN TỨC</Link></li>
            <li><Link href="/contact">LIÊN HỆ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
