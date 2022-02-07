import Link from 'next/link';

function Header() {
  return (
    <div style={{ paddingTop: '2rem', cursor: 'pointer' }}>
      <Link href={'/'} passHref>
        <img src="images/icon.png" alt="home icon" width="60px" height="60px" />
      </Link>
    </div>
  );
}
export default Header;
