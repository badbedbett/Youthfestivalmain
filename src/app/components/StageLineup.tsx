import type { MainStageArtist } from '../data/mainStageArtists'

export default function StageLineup({ artists }: { artists: MainStageArtist[] }) {
  return (
    <div className="stage-lineup">
      {artists.map(artist => (
        <div key={artist.name} className="stage-lineup-item">
          <div className="stage-lineup-avatar">
            <img
              src={artist.img}
              alt={artist.name}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: artist.imgPosition ?? 'center 20%' }}
            />
          </div>
          <div className="stage-lineup-body">
            <div className="stage-lineup-name">{artist.name}</div>
            <div className="stage-lineup-role">{artist.role}</div>
          </div>
        </div>
      ))}
      <style>{`
        .stage-lineup {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 4px;
        }
        .stage-lineup-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .stage-lineup-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(232,54,45,0.2);
        }
        .stage-lineup-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .stage-lineup-name {
          font-family: "Dela Gothic One", cursive;
          font-size: 14px;
          color: #000000;
          line-height: 1.25;
          margin-bottom: 4px;
        }
        .stage-lineup-role {
          font-family: "Inter", sans-serif;
          font-size: 14px;
          color: #333333;
          line-height: 1.65;
        }
      `}</style>
    </div>
  )
}
