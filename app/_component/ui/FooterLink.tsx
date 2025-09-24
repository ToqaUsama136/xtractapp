export default function FooterLink() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {' '}
      <div>
        <p className="pb-2 text-[18px]">Links</p>
        <ul className="space-y-2">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Process</a>
          </li>
          <li>
            <a href="#">Case studies</a>
          </li>
          <li>
            <a href="#">Benefits</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="pb-2 text-[18px]">Pages</p>
        <ul className="space-y-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">404</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="pb-2 text-[18px]">Socials</p>
        <ul className="space-y-2">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
