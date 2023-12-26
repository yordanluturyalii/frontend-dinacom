import { Col, Row, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div className="footer w-100">
      <Row className="m-0 gap-5 d-flex justify-content-between align-item-center">
        <Col lg="5" className="pt-5 pb-3 px-0 col-lg-5">
          <Link to="/beranda">
            <img
              src="./src/assets/img/sadamfooter.png"
              alt="Logo-Sadam-Footer"
              height="44"
              className="d-inline-block mb-3"
            />
          </Link>
          <p className="desc my-0">
            Sistem Pengaduan Online Masyarakat (SADAM) adalah layanan pengaduan
            keamanan publik berbasis website. Masyarakat tidak perlu datang ke
            instansi lagi untuk melapor, cukup menggunakan gawai dari manapun
            masyarakat dapat melapor keresahannya.
          </p>
        </Col>
        <Col className="d-flex flex-column col-lg-2 col mb-5 gap-2">
          <h5 className="fw-bold mb-3">Media Sosial</h5>
          <Link to="beranda">Instagram</Link>
          <Link to="beranda">Telegram</Link>
          <Link to="beranda">Facebook</Link>
          <Link to="beranda">X</Link>
        </Col>
        <Col className="d-flex flex-column col-lg-2 col mb-5 gap-2">
          <h5 className="fw-bold mb-3">Lain-lain</h5>
          <Link to="tentangkami">Tentang Kami</Link>
          <Link to="beranda">Kontak Kami</Link>
          <Link to="beranda">Privacy Police</Link>
          <Link to="beranda">Terms Of Service</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-left px-md-0 my-0">
            &copy; Copyright {new Date().getFullYear()}, Sadam
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default FooterComponent;
