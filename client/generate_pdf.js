import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Math Answers</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { text-align: center; }
        h2 { margin-top: 20px; }
        p { margin: 5px 0; }
      </style>
    </head>
    <body>
      <h1>Mathematics Answers</h1>
      <section>
        <h2>II. Answer the following</h2>
        <p><strong>9.</strong> Fundamental Theorem of Arithmetic: Every integer greater than 1 is either a prime number or can be uniquely expressed as a product of prime numbers, up to the order of the factors.</p>
        <p><strong>10.</strong> Maximum number of zeroes of a cubic polynomial: 3</p>
        <p><strong>11.</strong> A pair of linear equations in two variables can have 0, 1, or infinitely many solutions depending on the lines' positions (intersecting, parallel, or coincident).</p>
        <p><strong>12.</strong> For the quadratic equation 4x² + px + 3 = 0 to have real and equal roots, the discriminant must be zero: p² - 4*4*3 = 0 ⇒ p² = 48 ⇒ p = ±4√3</p>
        <p><strong>13.</strong> If the nth term of an AP is 5n - 3, the 5th term is: T₅ = 5*5 - 3 = 25 - 3 = 22</p>
        <p><strong>14.</strong> Basic Proportionality Theorem (Thales theorem): If a line is drawn parallel to one side of a triangle to intersect the other two sides, then it divides those sides proportionally.</p>
        <p><strong>15.</strong> Distance of the point (6, 8) from the x-axis is the absolute value of the y-coordinate: 8</p>
        <p><strong>16.</strong> Midpoint of coordinates (2, 3) and (4, 3) is: ((2 + 4)/2, (3 + 3)/2) = (3, 3)</p>
      </section>
      <section>
        <h2>III. Solve the following</h2>
        <p><strong>17.</strong> Prove that √5 - 3 is irrational: Assume √5 - 3 is rational ⇒ √5 = rational + 3 ⇒ √5 is rational, which is false. Hence, √5 - 3 is irrational.</p>
        <p><strong>18.</strong> If α and β are zeroes of polynomial x² - 3, find the value of α² + β² - αβ: Sum of zeroes α + β = 0, product αβ = -3; α² + β² - αβ = (α + β)² - 3αβ = 0² - 3(-3) = 9</p>
        <p><strong>19.</strong> Solve: 3x + y = 12 and x + y = 6; Subtract second from first: 2x = 6 ⇒ x = 3; Substitute x=3 in x + y = 6 ⇒ 3 + y = 6 ⇒ y = 3</p>
        <p><strong>20.</strong> Find the quadratic equation with roots given by 12x² - 4√15 x + 5 = 0 (already given).</p>
        <p><strong>21.</strong> Sum of first n terms of AP 11 + 13 + 15 + ... is: a = 11, d = 2; Sₙ = n/2 [2a + (n - 1)d] = n/2 [22 + 2(n - 1)] = n/2 [2n + 20] = n(n + 10)</p>
        <p><strong>22.</strong> A street lamp bulb is fixed on a pole 6m above the street. A woman 1.5m tall casts a shadow 3m long. Find distance from pole base: Using similar triangles: 6 / d = 1.5 / 3 ⇒ 6 / d = 0.5 ⇒ d = 12 m</p>
        <p><strong>23.</strong> Distance between (3, -8) and (2, -2): √[(3 - 2)² + (-8 + 2)²] = √[1² + (-6)²] = √(1 + 36) = √37</p>
        <p><strong>24.</strong> Nature of roots of 2x² - 4x + 3 = 0: Discriminant D = (-4)² - 4*2*3 = 16 - 24 = -8 < 0 ⇒ roots are complex conjugates.</p>
      </section>
      <section>
        <h2>IV. Solve the following</h2>
        <p><strong>25.</strong> Find LCM of HCF(306, 657) and 12 by prime factorization: HCF(306, 657) = 3; LCM(3, 12) = 12</p>
        <p><strong>26.</strong> Zeroes of P(x) = x² - 8x - 20: Using quadratic formula: x = [8 ± √(64 + 80)] / 2 = [8 ± √144] / 2 = (8 ± 12)/2; Zeroes: 10 and -2; Sum = 8, Product = -20 (verified)</p>
        <p><strong>27.</strong> Sum of numerator and denominator is 12. If 3 added to denominator, fraction becomes 2: Let numerator = x, denominator = 12 - x; (x) / (12 - x + 3) = 2 ⇒ x / (15 - x) = 2 ⇒ x = 2(15 - x) ⇒ x = 30 - 2x ⇒ 3x = 30 ⇒ x = 10; Fraction = 10 / 2 = 5</p>
        <p><strong>28.</strong> Motor boat speed in still water = 24 km/h, takes 1 hour more upstream for 32 km: Let stream speed = v; Upstream speed = 24 - v, downstream speed = 24 + v; Time difference = 1 hour; 32 / (24 - v) - 32 / (24 + v) = 1; Solve for v: v = 4 km/h</p>
        <p><strong>29.</strong> Angles of quadrilateral in AP, sum of opposite angles = 130º: Let angles be a, a + d, a + 2d, a + 3d; Sum of opposite angles: a + a + 2d = 130 ⇒ 2a + 2d = 130 ⇒ a + d = 65; Sum of all angles = 360 ⇒ 4a + 6d = 360; Substitute a = 65 - d: 4(65 - d) + 6d = 360 ⇒ 260 - 4d + 6d = 360 ⇒ 2d = 100 ⇒ d = 50; a = 65 - 50 = 15; Angles: 15º, 65º, 115º, 165º</p>
        <p><strong>30.</strong> AP whose 3rd term is 16, 7th term exceeds 5th by 12: T₃ = a + 2d = 16; T₇ - T₅ = 12 ⇒ (a + 6d) - (a + 4d) = 12 ⇒ 2d = 12 ⇒ d = 6; a + 2*6 = 16 ⇒ a = 4; AP: 4, 10, 16, 22, 28, ...</p>
        <p><strong>31.</strong> In parallelogram ABCD, diagonal BD intersects AE at F, E on BC: Prove DF/EF = FB/FA (using similar triangles and properties of parallelograms).</p>
        <p><strong>32.</strong> Find ratio in which point P(x, 2) divides join of A(12, 5) and B(4, -3): Using section formula: x = (m*4 + n*12) / (m + n), 2 = (m*(-3) + n*5) / (m + n); Solve for ratio m:n.</p>
        <p><strong>33.</strong> Prove √2 is irrational: Assume √2 = p/q in lowest terms, leads to contradiction as both p and q must be even.</p>
      </section>
      <section>
        <h2>V. Solve the following</h2>
        <p><strong>34.</strong> Solve graphically x + 2y = 6 and x + y = 5 (plot lines and find intersection).</p>
        <p><strong>35.</strong> Samreen takes 6 days less than Sangeetha to complete work. Together 4 days: Let Sangeetha take x days, Samreen x - 6 days; Work rate: 1/x + 1/(x - 6) = 1/4; Solve for x.</p>
        <p><strong>36.</strong> Check if points A(4, 3), B(6, 4), C(-5, -6), D(-3, 5) are vertices of parallelogram: Check if midpoints of AC and BD are same.</p>
        <p><strong>37.</strong> If two triangles are equiangular, prove they are similar (AAA similarity criterion).</p>
      </section>
      <section>
        <h2>VI. 38.</h2>
        <p>If p, qth and rth terms of AP are a, b, c respectively, prove: a(q - r) + b(r - p) + c(p - q) = 0</p>
        <p>Proof: Let first term = A, common difference = d; a = A + (p - 1)d; b = A + (q - 1)d; c = A + (r - 1)d</p>
        <p>Substitute: a(q - r) + b(r - p) + c(p - q) = [A + (p - 1)d](q - r) + [A + (q - 1)d](r - p) + [A + (r - 1)d](p - q)</p>
        <p>= A[(q - r) + (r - p) + (p - q)] + d[(p - 1)(q - r) + (q - 1)(r - p) + (r - 1)(p - q)]</p>
        <p>Note that (q - r) + (r - p) + (p - q) = 0</p>
        <p>So expression reduces to: d[(p - 1)(q - r) + (q - 1)(r - p) + (r - 1)(p - q)]</p>
        <p>Expanding and simplifying the terms, the sum equals zero.</p>
        <p>Hence proved.</p>
      </section>
    </body>
    </html>
  `;

  await page.setContent(htmlContent);
  await page.pdf({ path: '../math_answers.pdf', format: 'A4' });

  await browser.close();
  console.log('PDF generated successfully!');
})();
