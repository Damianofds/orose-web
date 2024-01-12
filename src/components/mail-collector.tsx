import React, { useState } from 'react';

export default function MailCollector() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isAddressSaved, setIsAddressSaved] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbzzL4rQQO1P-DtvkObaPApy1qA857WthGKHCic9CTE/dev';
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyl7QIS3PZ-ojjpgXJk9Un8Oz1Moa6t7WWc9wcpA_xqmBWaTzH87Jj4EqMTFvtzTNy-/exec';
  
    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
  
      if (!isValidEmail(email)) {
        setErrorMessage('Invalid email address');
        return;
      }
  
      setErrorMessage('');
      setIsSubmitting(true);
  
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(e.currentTarget),
        });
        if (response.ok) {
          setEmail('');
          setIsAddressSaved(true);
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='write your email address'
                    required
                    style={{
                        width: '80vw',
                        maxWidth: '260px',
                        padding: '10px',
                        marginBottom: '16px',
                        boxSizing: 'border-box',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        height: '50px',
                        
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <button type="submit" disabled={isSubmitting}>
                    Send
                </button>
                <br />
                <i>No subscription. A single message in your inbox only.</i>
                
                {isAddressSaved && <p><strong>Got it, see you soon!</strong></p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </>
    )
}