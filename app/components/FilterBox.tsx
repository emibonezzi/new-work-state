"use client";
import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  name: string;
  field: string;
  options: string[];
}

const FilterBox = ({ name, field, options }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleClick(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(field, value);
      if (params.get("page")) {
        params.delete("page");
      }
    } else {
      params.delete(field);
    }

    router.push("?" + params.toString());
  }

  return (
    <div className="border border-[rgb(11_93_102)] rounded-lg p-4">
      <h3>{name}</h3>
      <ul>
        <button
          onClick={(e) => handleClick((e.target as HTMLButtonElement).value)}
        >
          None
        </button>
        {options.sort().map((option, i) => (
          <li key={i}>
            <button
              value={option}
              onClick={(e) =>
                handleClick((e.target as HTMLButtonElement).value)
              }
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBox;
