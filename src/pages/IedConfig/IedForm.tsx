import { useState } from "react";
import iedData from "../../data/ied.json";
import { Switch } from '@skeletonlabs/skeleton-react';

export default function IedForm() {
  const { parameters, defaultValues } = iedData;
  const [formValues, setFormValues] = useState(defaultValues);

  const handleChange = (field: string, value: any) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="border border-blue-500 rounded-md p-6 mt-4">
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(parameters).map(([key, type]) => {
          if (type === "boolean") {
            return (
              <label key={key} className="flex items-center gap-2">
                <Switch
                  checked={formValues[key]}
                  onCheckedChange={checked => handleChange(key, checked)}
                />
                <span className="font-medium">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              </label>
            );
          }

          if (Array.isArray(type)) {
            return (
              <label key={key} className="flex flex-col">
                <span className="font-medium mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <select
                  value={formValues[key]}
                  onChange={e => handleChange(key, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {type.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            );
          }
        if (key === "groupId" || key === "id") {
            return;
        }
          return (
            <label key={key} className="flex flex-col">
              <span className="font-medium mb-1">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              <input
                type={type === "number" ? "number" : "text"}
                value={formValues[key] ?? ""}
                onChange={e =>
                  handleChange(
                    key,
                    type === "number" ? Number(e.target.value) : e.target.value
                  )
                }
                className="border rounded px-2 py-1"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}