'use client';
import { useState, useRef, useEffect } from 'react';

// ─── College data (replace with your real DB/API) ───────────────────────────
const COLLEGES = [
  { id: 1, name: 'IGNOU', city: 'Delhi', courses: ['MBA','MCA','BCA','MA','B.Com'], fees: 32000, mode: 'distance', rating: 4.1, naac: 'A', placements: false, emi: false, ugc: true, specializations: ['General','HR','Finance'] },
  { id: 2, name: 'Amity University Online', city: 'Noida', courses: ['MBA','BBA','MCA','B.Com'], fees: 95000, mode: 'online', rating: 4.3, naac: 'A+', placements: true, emi: true, ugc: true, specializations: ['Marketing','Finance','IT','HR'] },
  { id: 3, name: 'Chandigarh University Online', city: 'Chandigarh', courses: ['MBA','MCA','BCA','B.Com','BBA'], fees: 75000, mode: 'online', rating: 4.4, naac: 'A+', placements: true, emi: true, ugc: true, specializations: ['Data Science','Marketing','Finance','HR'] },
  { id: 4, name: 'Jain University Online', city: 'Bangalore', courses: ['MBA','MCA','BCA','B.Com'], fees: 85000, mode: 'online', rating: 4.2, naac: 'A', placements: true, emi: true, ugc: true, specializations: ['Finance','Marketing','Logistics'] },
  { id: 5, name: 'LPU Online', city: 'Punjab', courses: ['MBA','MCA','BCA','B.Tech','BBA'], fees: 80000, mode: 'online', rating: 4.3, naac: 'A+', placements: true, emi: true, ugc: true, specializations: ['HR','Finance','IT','Marketing'] },
  { id: 6, name: 'DU SOL', city: 'Delhi', courses: ['BA','B.Com','BCA','MA'], fees: 12000, mode: 'distance', rating: 4.0, naac: 'A++', placements: false, emi: false, ugc: true, specializations: ['General'] },
  { id: 7, name: 'NMIMS Global', city: 'Mumbai', courses: ['MBA','BBA','B.Com'], fees: 120000, mode: 'online', rating: 4.5, naac: 'A+', placements: true, emi: true, ugc: true, specializations: ['Finance','Marketing','Operations'] },
  { id: 8, name: 'Symbiosis Online', city: 'Pune', courses: ['MBA','BBA','B.Com'], fees: 110000, mode: 'online', rating: 4.4, naac: 'A+', placements: true, emi: true, ugc: true, specializations: ['HR','Marketing','Finance'] },
];

const SYSTEM_PROMPT = `You are an expert college counsellor for an Indian online/distance education platform. You help students find the best university or college based on their needs.

You have access to this college database (JSON):
${JSON.stringify(COLLEGES, null, 2)}

Your job:
1. Understand what the student is looking for (course, budget, city, mode, career goals, specialization, working professional status, etc.)
2. If the query is vague or missing key details, ask ONE specific clarifying question before recommending.
3. When you have enough info, recommend 2-4 best-matching colleges from the database above.
4. For each recommendation, explain WHY it's a good fit for THIS specific student — not generic facts.
5. Be conversational, warm, and specific. Never give generic advice.
6. If asked about fees, placements, EMI, NAAC grade — answer from the data above.
7. After recommending, always offer to answer follow-up questions or compare colleges.
8. NEVER recommend colleges not in your database.
9. Format college recommendations using this exact pattern:
   🏫 **[College Name]**
   - Why it fits you: [specific reason]
   - Fees: ₹[amount]/year | Mode: [online/distance]
   - NAAC: [grade] | Placements: [Yes/No] | EMI: [Yes/No]

Keep responses concise. If query has enough info, go straight to recommendations. Don't over-explain.`;

// ─── Main Component ──────────────────────────────────────────────────────────
export default function AIFinder({ quizContext = null }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: quizContext
        ? `Based on your quiz answers, I see you're interested in **${quizContext.course || 'a course'}**${quizContext.city ? ` in ${quizContext.city}` : ''}. Let me find the best colleges for you. Could you tell me your approximate annual budget?`
        : `Hi! I'm your AI College Finder. Tell me what you're looking for — course, budget, city, or even just your career goal — and I'll find the best colleges for you.\n\nFor example: *"MBA in Delhi under 80,000 fees"* or *"I'm a working professional looking for online MCA"*`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [lead, setLead] = useState({ name: '', phone: '' });
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadError, setLeadError] = useState('');
  const [msgCount, setMsgCount] = useState(0);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput('');

    const newCount = msgCount + 1;
    setMsgCount(newCount);

    // Show lead modal after 2nd user message if not captured yet
    if (newCount === 2 && !leadCaptured) {
      // Add user message first
      const updatedMessages = [...messages, { role: 'user', content: userText }];
      setMessages(updatedMessages);
      setShowLeadModal(true);
      return;
    }

    const updatedMessages = [...messages, { role: 'user', content: userText }];
    setMessages(updatedMessages);
    await callAI(updatedMessages);
  };

  const callAI = async (messageHistory) => {
    setLoading(true);
    // Add placeholder assistant message for streaming feel
    setMessages(prev => [...prev, { role: 'assistant', content: '', streaming: true }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: messageHistory.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || 'Sorry, something went wrong. Please try again.';

      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: reply },
      ]);
    } catch {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: 'Network error. Please check your connection and try again.' },
      ]);
    }
    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleLeadSubmit = async () => {
    if (!lead.name.trim()) { setLeadError('Please enter your name.'); return; }
    if (!/^\d{10}$/.test(lead.phone)) { setLeadError('Enter a valid 10-digit phone number.'); return; }
    setLeadError('');
    setLeadCaptured(true);
    setShowLeadModal(false);
    // Fire your CRM/backend here
    // await fetch('/api/leads', { method: 'POST', body: JSON.stringify({ ...lead, source: 'ai-finder' }) });
    // Continue the AI conversation
    await callAI(messages);
  };

  const chips = [
    'MBA under ₹80,000/year',
    'Online MCA with placements',
    'Working professional — evening classes',
    'NAAC A+ colleges for BCA',
    'Compare top 3 MBA colleges',
  ];

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--surface-0, #f8f8f6)' }}>

      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border, #e5e3db)', background: 'var(--surface-2, #fff)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#6C5CE7,#a29bfe)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ti ti-sparkles" style={{ color: '#fff', fontSize: 18 }} aria-hidden="true"></i>
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>AI College Finder</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Powered by AI · Understands your goals</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00b894', display: 'inline-block' }}></span>
          <span style={{ fontSize: 12, color: '#00b894' }}>Online</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} />
        ))}
        {loading && !messages[messages.length - 1]?.streaming && (
          <TypingIndicator />
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestion chips — only at start */}
      {messages.length <= 1 && (
        <div style={{ padding: '0 16px 12px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {chips.map(c => (
            <button key={c} onClick={() => sendMessage(c)}
              style={{ fontSize: 12, padding: '6px 12px', borderRadius: 20, border: '1px solid var(--border-strong, #d3d1c7)', background: 'var(--surface-2, #fff)', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              {c}
            </button>
          ))}
        </div>
      )}

      {/* Input bar */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border, #e5e3db)', background: 'var(--surface-2, #fff)', display: 'flex', gap: 8 }}>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          placeholder="Ask anything — course, budget, career goal..."
          disabled={loading || showLeadModal}
          style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1px solid var(--border-strong, #d3d1c7)', fontSize: 14, outline: 'none', background: 'var(--surface-1, #f1efe8)', color: 'var(--text-primary)', opacity: (loading || showLeadModal) ? 0.5 : 1 }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim() || showLeadModal}
          style={{ padding: '10px 16px', borderRadius: 10, background: '#6C5CE7', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 14, opacity: (!input.trim() || loading) ? 0.5 : 1, transition: 'opacity 0.2s' }}>
          <i className="ti ti-send" aria-hidden="true"></i>
        </button>
      </div>

      {/* Lead Modal */}
      {showLeadModal && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ background: 'var(--surface-2, #fff)', borderRadius: 16, padding: 28, width: '90%', maxWidth: 380 }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>🎓</div>
            <h3 style={{ fontWeight: 600, fontSize: 16, margin: '0 0 6px', color: 'var(--text-primary)' }}>Almost there!</h3>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 20px', lineHeight: 1.5 }}>
              I&apos;m ready to show you the best-matched colleges. Just drop your name and phone so a counsellor can follow up if you need help.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input
                placeholder="Your name"
                value={lead.name}
                onChange={e => { setLead({ ...lead, name: e.target.value }); setLeadError(''); }}
                style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border-strong, #d3d1c7)', fontSize: 14, outline: 'none', color: 'var(--text-primary)', background: 'var(--surface-1)' }}
              />
              <input
                placeholder="10-digit phone number"
                value={lead.phone}
                onChange={e => { setLead({ ...lead, phone: e.target.value }); setLeadError(''); }}
                type="tel"
                maxLength={10}
                style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border-strong, #d3d1c7)', fontSize: 14, outline: 'none', color: 'var(--text-primary)', background: 'var(--surface-1)' }}
              />
              {leadError && <p style={{ color: '#e24b4b', fontSize: 12, margin: 0 }}>{leadError}</p>}
              <button onClick={handleLeadSubmit}
                style={{ padding: '11px', borderRadius: 8, background: '#6C5CE7', color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginTop: 4 }}>
                Show My College Matches
              </button>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                No spam. Counsellor may reach out to assist you.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Message Bubble ───────────────────────────────────────────────────────────
function MessageBubble({ msg }) {
  const isUser = msg.role === 'user';
  const content = msg.content;

  return (
    <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', alignItems: 'flex-end', gap: 8 }}>
      {!isUser && (
        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#6C5CE7,#a29bfe)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <i className="ti ti-sparkles" style={{ color: '#fff', fontSize: 14 }} aria-hidden="true"></i>
        </div>
      )}
      <div style={{
        maxWidth: '78%',
        padding: '10px 14px',
        borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        background: isUser ? '#6C5CE7' : 'var(--surface-2, #fff)',
        color: isUser ? '#fff' : 'var(--text-primary)',
        fontSize: 14,
        lineHeight: 1.6,
        border: isUser ? 'none' : '1px solid var(--border, #e5e3db)',
        whiteSpace: 'pre-wrap',
      }}>
        {msg.streaming ? <TypingDots /> : <FormattedText text={content} />}
      </div>
    </div>
  );
}

// ─── Simple markdown-like formatter ──────────────────────────────────────────
function FormattedText({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <>
      {lines.map((line, i) => {
        // Bold: **text**
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <div key={i} style={{ marginBottom: line === '' ? 6 : 0 }}>
            {parts.map((p, j) =>
              j % 2 === 1
                ? <strong key={j} style={{ fontWeight: 600 }}>{p}</strong>
                : <span key={j}>{p.replace(/\*(.*?)\*/g, '$1')}</span>
            )}
          </div>
        );
      })}
    </>
  );
}

function TypingDots() {
  return (
    <span style={{ display: 'flex', gap: 4, alignItems: 'center', height: 20 }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted, #888)',
          animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
      <style>{`@keyframes pulse{0%,80%,100%{transform:scale(0.8);opacity:0.5}40%{transform:scale(1);opacity:1}}`}</style>
    </span>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#6C5CE7,#a29bfe)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="ti ti-sparkles" style={{ color: '#fff', fontSize: 14 }} aria-hidden="true"></i>
      </div>
      <div style={{ padding: '10px 14px', borderRadius: '16px 16px 16px 4px', background: 'var(--surface-2,#fff)', border: '1px solid var(--border,#e5e3db)' }}>
        <TypingDots />
      </div>
    </div>
  );
}
